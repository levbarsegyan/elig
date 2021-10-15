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
for e in elioApps elioData elioSin
do
  cd $e;
  source './git.sh' $MSG
  cd ..;
done
echo 'All commited with "$MSG"'
