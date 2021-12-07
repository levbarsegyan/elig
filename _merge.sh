#!/bin/bash
set +e
TRIBE="$1";
EXTRA="$2";
timestamp="$(date)"
echo "$TRIBE" > ".tribe.$TRIBE";
git add --all;
git add -u;
git commit -m "$TRIBE $timestamp";
git push -u origin "$TRIBE";
git checkout -B "$EXTRA";
git merge $TRIBE;
git commit -m "merged $TRIBE into $EXTRA on $timestamp";
git push -u origin "$EXTRA";
