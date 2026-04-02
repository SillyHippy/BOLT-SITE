#!/bin/bash
# SEO Audit Progress Heartbeat Script
# Runs every 30 minutes until 6:00 AM CST

WORKSPACE="/root/.openclaw/workspace/seo-audit-2026"
LOG_FILE="$WORKSPACE/logs/heartbeat.log"
PROGRESS_FILE="$WORKSPACE/logs/progress.json"

# Count files created
TOTAL_FILES=$(find "$WORKSPACE" -name "*.md" | wc -l)
LOCATION_PAGES=$(find "$WORKSPACE/07-location-pages" -name "*.md" 2>/dev/null | wc -l)
CONTENT_PAGES=$(find "$WORKSPACE/03-*" -name "*.md" 2>/dev/null | wc -l)
NOTARY_PAGES=$(find "$WORKSPACE/04-*" -name "*.md" 2>/dev/null | wc -l)
COURIER_PAGES=$(find "$WORKSPACE/05-*" -name "*.md" 2>/dev/null | wc -l)
WEDDING_PAGES=$(find "$WORKSPACE/06-*" -name "*.md" 2>/dev/null | wc -l)

echo "[$(date)] Heartbeat check - Total files: $TOTAL_FILES" >> "$LOG_FILE"
echo "[$(date)] Location pages: $LOCATION_PAGES | Process: $CONTENT_PAGES | Notary: $NOTARY_PAGES | Courier: $COURIER_PAGES | Wedding: $WEDDING_PAGES" >> "$LOG_FILE"

# Update progress JSON
cat > "$PROGRESS_FILE" <<EOF
{
  "last_check": "$(date -u +%Y-%m-%dT%H:%M:%SZ)",
  "total_files": $TOTAL_FILES,
  "location_pages": $LOCATION_PAGES,
  "process_serving_pages": $CONTENT_PAGES,
  "notary_pages": $NOTARY_PAGES,
  "courier_pages": $COURIER_PAGES,
  "wedding_pages": $WEDDING_PAGES
}
EOF

echo "Heartbeat complete. Total: $TOTAL_FILES files created."
