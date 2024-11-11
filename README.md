# PRODUTO-API
---
Este projeto fornece uma API para gerenciar produtos, incluindo criação, atualização, consulta e remoção de produtos.

## Pré-requisitos

- **Node.js** e **npm** instalados.
- Docker instalado para executar uma imagem do PostgreSQL.

## Passos de Instalação

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/joaoPAndrade/produto-api.git
   ```

2. **Instale as dependências**:

   Navegue até o diretório do projeto e execute:
   
   ```bash
   npm install
   ```

3. **Execute o PostgreSQL com Docker**:

   Inicie uma imagem do PostgreSQL usando o comando:

   ```bash
   npm run create:db
   ```

4. **Crie as tabelas no banco de dados**:

   Execute a migração para criar a estrutura das tabelas:

   ```bash
   npm run migration
   ```

5. **Popule o banco de dados**:

   Adicione dados iniciais ao banco executando:

   ```bash
   npm run seed
   ```

6. **Configure as variáveis de ambiente**:

   Na raiz do projeto, crie um arquivo `.env` com as seguintes variáveis:

   ```env
   APP_PORT=              # Porta onde a API será executada (se não for especificada, a API usará a porta 3000)
   DB_USER=               # Usuário do banco de dados
   DB_HOST=               # Host do banco de dados (ex.: localhost)
   DB_DATABASE=           # Nome do banco de dados
   DB_PASSWORD=           # Senha do banco de dados
   DB_PORT=               # Porta do banco de dados (ex.: 5432)
   ```
   caso inicie um docker usando o script disponibilizado utilize este `.env`:
   ```env
   APP_PORT=8000
   DB_USER=root
   DB_HOST=localhost
   DB_DATABASE=produto
   DB_PASSWORD=123
   DB_PORT=5433
   ```

7. **Inicie a API em modo de desenvolvimento**:

   Use o comando abaixo para iniciar o servidor:

   ```bash
   npm run start:dev
   ```

   A API será executada no `localhost` na porta especificada em `APP_PORT` ou, caso não tenha sido definida, na porta padrão `3000`.

## Rotas da API

### 1. Adicionar Produto

- **Método:** `POST`
- **Endpoint:** `/produto`
- **Formato do JSON de entrada:**

   ```json
   {
       "descricao": "Produto A",
       "preco": "20.00",
       "estoque": 50,
       "data": "2025-12-03T08:37:51.852Z"
   }
   ```

### 2. Deletar Produto

- **Método:** `DELETE`
- **Endpoint:** `/produto/:id`
- **Descrição:** Substitua `:id` pelo ID do produto a ser removido.

### 3. Atualizar Produto

- **Método:** `PUT`
- **Endpoint:** `/produto/:id`
- **Formato do JSON de entrada:**

   ```json
   {
       "descricao": "Produto A",
       "preco": "20.00",
       "estoque": 50,
       "data": "2025-12-03T08:37:51.852Z"
   }
   ```
   **Nota:** Inclua apenas os atributos que deseja alterar.

### 4. Consultar Produto

- **Método:** `GET`
- **Endpoint:** `/produto/:id`
- **Descrição:** Substitua `:id` pelo ID do produto para visualizar suas informações.

### 5. Listar Todos os Produtos

- **Método:** `GET`
- **Endpoint:** `/produtos`

## Scripts Disponíveis

- `npm run create:db` - Inicia uma imagem do PostgreSQL no Docker.
- `npm run migration` - Cria as tabelas no banco de dados.
- `npm run seed` - Popula o banco com dados iniciais.
- `npm run start:dev` - Executa a API em modo de desenvolvimento.
