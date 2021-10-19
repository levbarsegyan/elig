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
echo $MSG > MSG;
git add --all && git commit -m $MSG && git push;
for e in elioApps elioData elioSin
do
  cd $e;
  source './npm.sh' $MSG
  cd ..;
done
echo "All commited with message: '$MSG'"
