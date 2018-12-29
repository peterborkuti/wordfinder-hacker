#!/bin/bash

echo -e 'const words: {[index: string]: string[]} = {};\n\n' > words.ts

cat words-*.ts >> words.ts

echo -e '\nexport { words };\n' >> words.ts

cp words.ts ../src/core/.


rm words.ts