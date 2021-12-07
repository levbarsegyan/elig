#!/bin/bash
set +e
TRIBE="$1";
echo "$TRIBE" > ".tribe.$TRIBE";
git push -u origin "$TRIBE";
