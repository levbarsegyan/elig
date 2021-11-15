#!/bin/bash
set -u
set -e
export COMMIT="$1";
timestamp="$(date)"
echo "$COMMIT" > COMMIT;
git add --all && git commit -m "$COMMIT $timestamp" && git push;
for e in elioData elioSin # elioApps
do
  cd $e;
  source './newbranch.sh' "$COMMIT"
  cd ..;
done
echo "All commited with message: '$COMMIT'"
