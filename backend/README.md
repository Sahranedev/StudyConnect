# Pour initialiser Prisma

> `npm i` > `npx prisma init` > `npx prisma db push`

## La commande pour générer un token:

> `ssh-keygen -t rsa -b 4096 -m PEM -f jwtRS256.key`

#### Ne pas ajouter de passphrase lorsque le terminal le demande (appuyer sur entrée sans rien écrire)

> `openssl rsa -in jwtRS256.key -pubout -outform PEM -out jwtRS256.key.pub`
