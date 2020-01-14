#!/bin/bash

for test in `ls **/*test.js`
do
node $test
done

echo "Parabéns, você brilhou!"
