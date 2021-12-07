#!/bin/bash
set +e
TRIBE="$1";
echo "$TRIBE" > ".tribe.$TRIBE";
source "_merge.sh" "$TRIBE" "master";
npm version patch
npm publish
source "_push.sh" "$TRIBE";
