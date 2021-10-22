#!/bin/bash
set -u
set -e
export MSG="$1";
if [ ! $MSG ];
  then {
  $MSG = "No message"
  }
fi
for e in elioData elioSin
do
  cd $e;
  source './nenpm.sh' "$MSG"
  cd ..;
done
echo "All packages published with message: '$MSG'"
