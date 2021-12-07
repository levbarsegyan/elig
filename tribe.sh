#!/bin/bash
set +e
TRIBE="$1";
COMMAND="$2";
EXTRA="$3";
for PROJ in elioData #elioBelievers elioThings # elioData elioSin elioThings
do
  cd $PROJ;
  source "tribe.sh" "$TRIBE" "$COMMAND" "$EXTRA";
  cd ..;
done
KING=${PWD##*/};
source "_$COMMAND.sh" "$TRIBE" "$EXTRA";
source "_say.sh" "$TRIBE" "$COMMAND" "$KING";
