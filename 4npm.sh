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
for f in bones generator-flesh spider
do
  cd $f;
  echo $MSG > MSG;
  git add --all && git commit -m $MSG && git push;
  cd ..;
done
