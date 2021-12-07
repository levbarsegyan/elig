#!/bin/bash
set +e
TRIBE="$1";
timestamp="$(date)"
echo "$TRIBE" > ".tribe.$TRIBE.$timestamp";
git add --all && git commit -m "$TRIBE $timestamp";
git push -u origin "$TRIBE";
