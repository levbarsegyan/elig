#!/bin/bash
set -u
set -e
export COMMIT="$1";
for e in elioData elioSin
do
  cd $e;
  source './nenpm.sh' "$COMMIT"
  cd ..;
done
echo "All packages published with message: '$COMMIT'"
