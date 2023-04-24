#!/bin/bash

yarn start &
PRE_PROCESS="$!"
sleep 5

echo $PRE_PROCESS

wget -P .site -nv -nH -r -E "localhost:3000"

kill $PRE_PROCESS
