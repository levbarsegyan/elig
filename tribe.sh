#!/bin/bash
set +e
TRIBE="$1";
COMMAND="$2";
EXTRA="$3";
while IFS='' read -r line || [[ -n "$line" ]]; do
  cd $line;
  source "tribe.sh" "$TRIBE" "$COMMAND" "$EXTRA";
  cd ..;
done < ".tribalinclude"
PROJECT=${PWD##*/};
source "_$COMMAND.sh" "$TRIBE" "$EXTRA";
source "_say.sh" "$TRIBE" "$COMMAND" "$PROJECT";
