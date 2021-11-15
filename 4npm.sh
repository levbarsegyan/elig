#!/bin/bash
set -u
set -e
export COMMIT="$1";
if [ ! $COMMIT ];
  then {
  echo 'ERROR: 1st parameter should be commit COMMIT';
  exit 130;
  }
fi
for f in bones generator-flesh spider
do
  cd $f;
  echo $COMMIT > COMMIT;
  git add --all && git commit -m $COMMIT && git push;
  cd ..;
done
