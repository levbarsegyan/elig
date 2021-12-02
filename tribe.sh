#!/bin/bash
export TRIBE="$1";
export COMMAND="$2";
timestamp="$(date)";
for f in elioBelievers elioData elioSin elioThings
do
  cd $f;
  source "./$f/tribe.sh" "$TRIBE" "$COMMAND";
  cd ..;
done
echo "[>><<TRIBES>><<].$TRIBE.elioBelievers._$COMMAND ✓";
source "_$COMMAND.sh" "$TRIBE" "elioThings";
