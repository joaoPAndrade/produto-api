# PRODUTO-API

Clone o repositório usando
```bash
git clone https://github.com/joaoPAndrade/produto-api.git
```

baixe as dependencias usando o comando 
```bash
    npm install
```

execute uma imagem do postgres usando
```bash
    npm run create:db
```

crie a tabela usando
```bash
    npm run migration
```

popule o banco de dados usando
```bash
    npm run seed
```

crie um .env na raiz do projeto com as variáveis
```bash
    APP_PORT=
    DB_USER=
    DB_HOST=
    DB_DATABASE=
    DB_PASSWORD=
    DB_PORT=
```
execute a api usando
```bash
    npm run start:dev
```
###
# Rotas
POST
```
    /produto
``` 
O formato do JSON deve ser:
```JSON
    {
    "Descricao": "Produto A",
    "Preco": "20.00",
    "Estoque": 50
    }
```
DELETE
```
    /produto/:id
```
PUT
```
    /produto/:id
```
O formato do JSON deve ser:
```JSON
    {
    "Descricao": "Produto A",
    "Preco": "20.00",
    "Estoque": 50
    }
```
colocando apenas o atributo que deseja alterar no JSON
GET
```
    /produto/:id
```
GET
```
    /produtos
```
