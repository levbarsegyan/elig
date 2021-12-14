#!/bin/bash
set +e
TRIBE="$1";
if [ -f .npminclude ]; then {
  npm version patch
  npm publish
  git push -u origin "$TRIBE";
}
fi
