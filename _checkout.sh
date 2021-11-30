#!/bin/bash
# treat unset variables as an error when substituting.
# set -u
# exit immediately if a command exits with a nonzero exit status.
# set -e
export TRIBE="$1";
export APP="$2";
timestamp="$(date)"
# commit and timestamp
echo "$TRIBE" > ".tribe.$TRIBE.CHECKOUT";
git add --all && git commit -m "$TRIBE $timestamp";
# push to branch
git checkout -B "$TRIBE"
