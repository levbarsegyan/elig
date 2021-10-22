#!/bin/bash
set -u
set -e
export MSG="$1";
if [ ! $MSG ];
  then {
  $MSG = "No message"
  }
fi
echo $MSG > MSG;
git add --all && git commit -m $MSG && git push;
for e in elioApps elioData elioSin
do
  cd $e;
  source './gitem.sh' $MSG
  cd ..;
done
echo "All commited with message: '$MSG'"
