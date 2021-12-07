#!/bin/bash
set +e
TRIBE="$1";
timestamp="$(date)";
echo "$TRIBE" > ".tribe.$TRIBE";
git add --all;
git add -u;
git commit -m "$TRIBE $timestamp";
