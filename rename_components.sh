#!/bin/bash

# Este script renomeia todos os arquivos .ts e .html que possuem "component-component"
# para "component"

find src/app -name '*-component.component.ts' -exec bash -c 'mv "$0" "${0/-component.component.ts/.component.ts}"' {} \;
find src/app -name '*-component.component.html' -exec bash -c 'mv "$0" "${0/-component.component.html/.component.html}"' {} \;
find src/app -name '*-component.component.scss' -exec bash -c 'mv "$0" "${0/-component.component.scss/.component.scss}"' {} \;

# Atualizar os imports e referências nos arquivos .ts
grep -rl '--component.component' src/app | xargs sed -i 's/-component.component/.component/g'

echo "Renomeação concluída!"
