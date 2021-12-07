#!/bin/bash
set -e
TRIBE="$1";
COMMAND="$2";
EXTRA="$3";
timestamp="$(date)";
for APP in sinsay tribes
do
  cd $APP;
  source "../../_$COMMAND.sh" "$TRIBE" "$EXTRA";
  source "../../_say.sh" "$TRIBE" "$COMMAND" "$APP";
  cd ..;
done
PROJECT=${PWD##*/};
source "../_$COMMAND.sh" "$TRIBE" "$EXTRA ";
source "../_say.sh" "$TRIBE" "$COMMAND" "$PROJECT";
