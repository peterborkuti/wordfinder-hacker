#!/bin/bash
for i in adv sentint; do
    cat $i.lexicon | sed -e 's/#[ =]//'|grep -v '^#'| grep -v '^.$'|\
    grep -v '^..$'| grep -v '[:?]$'|awk '{print $1}' > $i.txt
done

for i in advpron conj greeting missing ono peeta teszt; do
    cat $i.lexicon | sed -e 's/#//'|grep -v '^#'| grep -v '^.$'|\
    grep -v '^..$'|awk '{print $1}' > $i.txt
done

for i in prev prep; do
    cat $i.lexicon | grep -v '#'| grep -v '^.$'|\
    grep -v '^..$'|awk '{print $1}' > $i.txt
done

# words with @
grep '@' *.lexicon|sed -e 's/\(.*\) \([a-z]*\)@\([a-z]*\).*/\2 \3/g'|tr ' ' '\n' > at.txt

cat *.txt|tr '-' '\n'|tr -d '?.;'|grep -v '^ *$' | grep -v '[^a-z]'|sort|uniq > all.txt

cp all.txt allwords.hu

rm *.txt

# ----------------------------

awk '{print length, $1}' allwords.hu|grep '^[3456789] '| awk '{print $2}' > allwords-2.txt

awk '{a="\047"; print a$1a","}' allwords-2.txt > allwords-3.txt

cat allwords-3.txt|tr '\n' ' '|fold -s| sed -e 's/ $//;$s/,$//' > allwords-4.txt

sed -e '1s/^/words.hu = [\n/' allwords-4.txt > words-hu.ts

echo -e "\n].sort();\n\n\n" >> words-hu.ts

cp words-hu.ts ..

rm allwords-*
rm words.*
rm words-*

