#!/bin/bash
set -u
set -e
export MSG="$1";
timestamp="$(date)"
echo "$MSG $timestamp" > MSG;
git add --all && git commit -m "$MSG $timestamp" && git push;
for e in elioData elioSin elioThings
do
  cd $e;
  source './gitem.sh' "$MSG"
  cd ..;
done
echo "All commited with message: '$MSG'"
