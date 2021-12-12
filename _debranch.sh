#!/bin/bash
set +e
TRIBE="$1";
git branch -D "$TRIBE";
git push origin --delete "$TRIBE";
rm ".tribe.$TRIBE"
