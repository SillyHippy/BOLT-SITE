const fs = require('fs');
const path = require('path');

/**
 * Real JSON-LD & Structured Data Validation Script
 * Validates schema files against Schema.org requirements, field types, and structure.
 */

const REQUIRED_FIELDS_BY_TYPE = {
  LocalBusiness: ['@type', 'name', 'address'],
  Organization: ['@type', 'name'],
  FAQPage: ['@type', 'mainEntity'],
  Question: ['@type', 'name', 'acceptedAnswer'],
  Answer: ['@type', 'text'],
  VideoObject: ['@type', 'name', 'description', 'thumbnailUrl', 'uploadDate'],
  BreadcrumbList: ['@type', 'itemListElement'],
  Product: ['@type', 'name'],
  Service: ['@type', 'name'],
  HowTo: ['@type', 'name', 'step'],
  AggregateRating: ['@type', 'ratingValue', 'reviewCount'],
};

function validateSchemaObject(data, fileName, pathPrefix = '') {
  const errors = [];
  const warnings = [];

  if (!data || typeof data !== 'object') {
    errors.push(`${pathPrefix}: Root payload is not a valid JSON object`);
    return { errors, warnings };
  }

  // Handle arrays of schemas or @graph arrays
  if (Array.isArray(data)) {
    data.forEach((item, index) => {
      const res = validateSchemaObject(item, fileName, `${pathPrefix}[${index}]`);
      errors.push(...res.errors);
      warnings.push(...res.warnings);
    });
    return { errors, warnings };
  }

  if (data['@graph'] && Array.isArray(data['@graph'])) {
    data['@graph'].forEach((item, index) => {
      const res = validateSchemaObject(item, fileName, `${pathPrefix}.@graph[${index}]`);
      errors.push(...res.errors);
      warnings.push(...res.warnings);
    });
    return { errors, warnings };
  }

  const schemaType = data['@type'];
  if (!schemaType) {
    // Might be a plain metadata JSON file (like build-manifest.json or ai-search files)
    if (fileName.includes('ai-search') || fileName.includes('manifest')) {
      return { errors, warnings };
    }
    warnings.push(`${pathPrefix}: Missing @type field`);
    return { errors, warnings };
  }

  // Validate context
  const context = data['@context'];
  if (context && typeof context === 'string' && !context.includes('schema.org')) {
    warnings.push(`${pathPrefix}: @context is "${context}" (expected schema.org URL)`);
  }

  // Check required fields by type
  const typesToCheck = Array.isArray(schemaType) ? schemaType : [schemaType];
  for (const type of typesToCheck) {
    const required = REQUIRED_FIELDS_BY_TYPE[type];
    if (required) {
      for (const field of required) {
        if (data[field] === undefined || data[field] === null || data[field] === '') {
          errors.push(`${pathPrefix} (${type}): Missing required field "${field}"`);
        }
      }
    }
  }

  // Specific field type checks
  if (data.aggregateRating) {
    const ar = data.aggregateRating;
    if (ar.reviewCount !== undefined) {
      if (typeof ar.reviewCount !== 'number') {
        errors.push(`${pathPrefix}.aggregateRating: reviewCount must be an integer (got ${typeof ar.reviewCount}: "${ar.reviewCount}")`);
      }
    }
  }

  if (data.reviewCount !== undefined && schemaType === 'AggregateRating') {
    if (typeof data.reviewCount !== 'number') {
      errors.push(`${pathPrefix}: reviewCount must be an integer (got ${typeof data.reviewCount}: "${data.reviewCount}")`);
    }
  }

  // Recurse into nested objects — skip plain string/number arrays (standard JSON-LD primitives)
  for (const [key, value] of Object.entries(data)) {
    if (value && typeof value === 'object' && key !== '@context') {
      // Don't recurse into arrays of primitives (strings/numbers)
      if (Array.isArray(value) && value.length > 0 && typeof value[0] !== 'object') {
        continue;
      }
      const res = validateSchemaObject(value, fileName, `${pathPrefix}.${key}`);
      errors.push(...res.errors);
      warnings.push(...res.warnings);
    }
  }

  return { errors, warnings };
}

async function validateAllSchemas() {
  console.log('🔍 Starting comprehensive schema & structured data validation...\n');

  const publicDir = path.join(process.cwd(), 'public');
  const aiSearchDir = path.join(publicDir, 'ai-search');

  // Discover JSON files to validate
  const filesToValidate = [];

  if (fs.existsSync(publicDir)) {
    const publicFiles = fs.readdirSync(publicDir)
      .filter(f => f.endsWith('.json'))
      .map(f => path.join(publicDir, f));
    filesToValidate.push(...publicFiles);
  }

  if (fs.existsSync(aiSearchDir)) {
    const aiFiles = fs.readdirSync(aiSearchDir)
      .filter(f => f.endsWith('.json'))
      .map(f => path.join(aiSearchDir, f));
    filesToValidate.push(...aiFiles);
  }

  let totalChecked = 0;
  let totalErrors = 0;
  let totalWarnings = 0;

  for (const file of filesToValidate) {
    const relPath = path.relative(process.cwd(), file);
    totalChecked++;

    try {
      const content = fs.readFileSync(file, 'utf8');
      const data = JSON.parse(content);
      const { errors, warnings } = validateSchemaObject(data, relPath, path.basename(file));

      if (errors.length === 0 && warnings.length === 0) {
        console.log(`  ✅ ${relPath}`);
      } else {
        if (errors.length > 0) {
          console.error(`  ❌ ${relPath} (${errors.length} error${errors.length > 1 ? 's' : ''}):`);
          errors.forEach(e => console.error(`      - ${e}`));
          totalErrors += errors.length;
        }
        if (warnings.length > 0) {
          console.warn(`  ⚠️ ${relPath} (${warnings.length} warning${warnings.length > 1 ? 's' : ''}):`);
          warnings.forEach(w => console.warn(`      - ${w}`));
          totalWarnings += warnings.length;
        }
      }
    } catch (err) {
      console.error(`  ❌ ${relPath}: Invalid JSON syntax — ${err.message}`);
      totalErrors++;
    }
  }

  console.log(`\n════════════════════════════════════════════════════════════`);
  console.log(`📊 SUMMARY: ${totalChecked} files checked | ${totalErrors} errors | ${totalWarnings} warnings`);
  console.log(`════════════════════════════════════════════════════════════\n`);

  if (totalErrors > 0) {
    process.exit(1);
  }
}

validateAllSchemas();
