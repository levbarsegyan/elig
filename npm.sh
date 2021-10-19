#!/bin/bash
set -u
set -e
export MSG="$1";
if [ ! $MSG ];
  then {
  echo 'ERROR: 1st parameter should be commit MSG';
  exit 130;
  }
fi
for e in elioData elioSin
do
  cd $e;
  source './npm.sh' $MSG
  cd ..;
done
echo "All packages published with message: '$MSG'"
