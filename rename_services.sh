#!/bin/bash

# Este script renomeia todos os arquivos .ts que possuem "service.service.ts"
# para "service.ts"

find src/app -name '*-service.service.ts' -exec bash -c 'mv "$0" "${0/-service.service.ts/.service.ts}"' {} \;

# Atualizar os imports e referências nos arquivos .ts
grep -rl '--service.service' src/app | xargs sed -i 's/-service.service/.service/g'

echo "Renomeação dos serviços concluída!"
