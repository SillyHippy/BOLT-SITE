/**
 * jscodeshift codemod: convert internal `<a href="/...">` to `<Link>`.
 *
 * Rules:
 *  - Only rewrite `<a>` where href is a STRING LITERAL starting with `/`
 *    (internal routes). Dynamic hrefs, externals, mailto:, tel:, and #anchors
 *    are left untouched.
 *  - All other attributes (className, onClick, target, rel, aria-*, data-*,
 *    style, ref, id, title, etc.) are preserved verbatim.
 *  - `<a>` elements that carry a `download` attribute are skipped (they are
 *    file downloads, not navigation).
 *  - If the file doesn't already import the default export from `next/link`,
 *    an `import Link from 'next/link';` line is inserted after the last
 *    existing top-level import statement.
 *
 * Usage:
 *   npx jscodeshift -t scripts/codemods/a-to-link.ts \
 *     "app/**\/*.tsx" "components/**\/*.tsx" --parser=tsx
 */

import type {
  API,
  ASTPath,
  Collection,
  FileInfo,
  ImportDeclaration,
  JSXAttribute,
  JSXElement,
  JSXIdentifier,
  Options,
} from 'jscodeshift';

const EXTERNAL_PREFIXES = ['http://', 'https://', 'mailto:', 'tel:', '//'];

function isInternalStringLiteralHref(value: string): boolean {
  if (!value) return false;
  if (EXTERNAL_PREFIXES.some((p) => value.startsWith(p))) return false;
  if (value.startsWith('#')) return false;
  return value.startsWith('/');
}

function findHrefAttr(el: JSXElement): JSXAttribute | null {
  for (const attr of el.openingElement.attributes ?? []) {
    if (attr.type !== 'JSXAttribute') continue;
    const name = attr.name;
    if (name.type === 'JSXIdentifier' && name.name === 'href') {
      return attr;
    }
  }
  return null;
}

function hasDownloadAttr(el: JSXElement): boolean {
  for (const attr of el.openingElement.attributes ?? []) {
    if (attr.type !== 'JSXAttribute') continue;
    const name = attr.name;
    if (name.type === 'JSXIdentifier' && name.name === 'download') return true;
  }
  return false;
}

function hasLinkDefaultImport(root: Collection<unknown>, j: API['jscodeshift']): boolean {
  let found = false;
  root
    .find(j.ImportDeclaration, {
      source: { value: 'next/link' },
    })
    .forEach((p: ASTPath<ImportDeclaration>) => {
      const specifiers = p.node.specifiers ?? [];
      for (const s of specifiers) {
        if (s.type === 'ImportDefaultSpecifier' && s.local?.name) {
          found = true;
          break;
        }
      }
    });
  return found;
}

function addLinkImport(root: Collection<unknown>, j: API['jscodeshift']): void {
  const importDecl = j.importDeclaration(
    [j.importDefaultSpecifier(j.identifier('Link'))],
    j.literal('next/link')
  );

  const imports = root.find(j.ImportDeclaration);
  if (imports.size() > 0) {
    // Insert after the last existing import so we don't disturb the
    // top-of-file comment/license block (if any).
    imports.at(-1).insertAfter(importDecl);
  } else {
    // No imports at all — put it at the very top of the file.
    const body = (root.get().node.program || root.get().node).body;
    body.unshift(importDecl);
  }
}

export default function transformer(
  file: FileInfo,
  api: API,
  _options: Options
): string | undefined {
  const j = api.jscodeshift;
  const root = j(file.source);

  let changed = 0;

  root
    .find(j.JSXElement, {
      openingElement: { name: { type: 'JSXIdentifier', name: 'a' } },
    })
    .forEach((path: ASTPath<JSXElement>) => {
      const el = path.node;
      const hrefAttr = findHrefAttr(el);
      if (!hrefAttr) return;
      if (hasDownloadAttr(el)) return;

      const value = hrefAttr.value;
      // Only string-literal hrefs. Skip JSXExpressionContainer, template
      // literals, null (boolean-attr), etc.
      if (!value || value.type !== 'Literal' && value.type !== 'StringLiteral') return;
      const hrefStr = (value as { value?: unknown }).value;
      if (typeof hrefStr !== 'string') return;
      if (!isInternalStringLiteralHref(hrefStr)) return;

      // Rewrite the tag name.
      const opening = el.openingElement;
      const closing = el.closingElement;
      (opening.name as JSXIdentifier).name = 'Link';
      if (closing && closing.name.type === 'JSXIdentifier') {
        closing.name.name = 'Link';
      }
      changed += 1;
    });

  if (changed === 0) return undefined;

  if (!hasLinkDefaultImport(root, j)) {
    addLinkImport(root, j);
  }

  return root.toSource({ quote: 'single', reuseWhitespace: true });
}

export const parser = 'tsx';
