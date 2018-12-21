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

cp all.txt ../allwords.txt

rm *.txt
