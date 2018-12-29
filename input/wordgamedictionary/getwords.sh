#!/bin/bash

#for i in `seq 3 9`; do
#    curl https://www.wordgamedictionary.com/word-lists/$i-letter-words/$i-letter-words.json > $i-letter-words.json
#done

cat ?-letter-words.json|tr ',]' '\n'| sed -e 's/"word"//'|tr -dc 'a-z\n' > allwords.txt

awk '{a="\047"; print a$1a","}' allwords.txt > allwords-3.txt

cat allwords-3.txt|tr '\n' ' '|fold -s| sed -e 's/ $//;$s/,$//' > allwords-4.txt

sed -e '1s/^/words.en = [\n/' allwords-4.txt > words-en.ts

echo -e "\n].sort();\n\n\n" >> words-en.ts

cp words-en.ts ..

rm allwords-*
rm words*
rm allwords.*

