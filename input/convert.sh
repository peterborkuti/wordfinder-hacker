#!/bin/bash

awk '{print length, $1}' allwords.txt|grep '^[3456789] '| awk '{print $2}' > allwords-2.txt

awk '{a="\047"; print a$1a","}' allwords-2.txt > allwords-3.txt

cat allwords-3.txt|tr '\n' ' '|fold -s| sed -e 's/ $//;$s/,$//' > allwords-4.txt

sed -e '1s/^/const words = [\n/' allwords-4.txt > words.ts

echo -e "\n].sort();\n\nexport { words };\n\n" >> words.ts

cp words.ts ../src/core/.

rm allwords-*
rm words.*

