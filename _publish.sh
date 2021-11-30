#!/bin/bash
# treat unset variables as an error when substituting.
set -u
# exit immediately if a command exits with a nonzero exit status.
set -e
export TRIBE="$1";
export APP="$2";
timestamp="$(date)"
# put this branch in the git history of the active branch.
echo "$TRIBE" > ".tribe.$TRIBE.PUBLISH";
git add --all && git commit -m "$TRIBE $timestamp"
npm version patch
npm publish
git push -u origin "$TRIBE";
