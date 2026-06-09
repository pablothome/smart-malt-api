# 🍺 SMART MALT API

Sistema de gestão de estoque e vendas para adegas, distribuidoras e cervejarias.

## 📋 Sobre o Projeto

O SMART MALT é uma API REST desenvolvida para controlar produtos, clientes, fornecedores, movimentações de estoque e vendas.

O sistema permite:

* Cadastro de produtos
* Cadastro de clientes
* Cadastro de fornecedores
* Controle de entrada de estoque
* Controle de saída de estoque
* Registro de vendas
* Atualização automática do estoque
* Dashboard com indicadores gerenciais
* Documentação interativa via Swagger

---

## 🚀 Tecnologias Utilizadas

* Node.js
* Express.js
* PostgreSQL
* Prisma ORM
* Zod
* Swagger
* Cors
* Nodemon

---

## 📦 Instalação

Clone o projeto:

```bash
git clone https://github.com/SEU-USUARIO/smart-malt-api.git
```

Acesse a pasta:

```bash
cd smart-malt-api
```

Instale as dependências:

```bash
npm install
```

---

## ⚙️ Configuração

Crie um arquivo `.env`:

```env
DATABASE_URL="postgresql://postgres:SUA_SENHA@localhost:5432/smartMalt"
PORT=3000
```

---

## 🗄️ Banco de Dados

Execute as migrations:

```bash
npx prisma migrate dev
```

Gerar cliente Prisma:

```bash
npx prisma generate
```

Abrir Prisma Studio:

```bash
npx prisma studio
```

---

## ▶️ Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Servidor:

```bash
http://localhost:3000
```

---

## 📚 Documentação Swagger

Acesse:

```text
http://localhost:3000/api-docs
```

---

## 🏗️ Estrutura do Projeto

```text
src/
├── controllers/
├── routes/
├── validations/
├── prisma/
├── app.js
├── server.js

prisma/
├── schema.prisma
├── migrations/
```

---

## 📊 Funcionalidades

### Produtos

* Criar produto
* Listar produtos
* Buscar produto por ID
* Atualizar produto
* Excluir produto

### Clientes

* Criar cliente
* Listar clientes
* Buscar cliente por ID
* Atualizar cliente
* Excluir cliente

### Fornecedores

* Criar fornecedor
* Listar fornecedores
* Buscar fornecedor por ID
* Atualizar fornecedor
* Excluir fornecedor

### Movimentações

* Entrada de estoque
* Saída de estoque
* Histórico de movimentações

### Vendas

* Registro de vendas
* Baixa automática de estoque
* Cálculo automático do valor total

### Dashboard

* Total de produtos
* Total de clientes
* Total de fornecedores
* Total de movimentações
* Produtos com baixo estoque
* Quantidade total em estoque
* Últimas movimentações

---

## 🔒 Validações

O sistema utiliza Zod para validação dos dados enviados para a API.

Exemplos:

* Nome obrigatório
* Estoque não pode ser negativo
* Preço deve ser maior que zero
* Email válido
* CNPJ único
* Venda sem estoque é bloqueada

---

## 👨‍💻 Autor

Pablo Thomé de Lima

Projeto desenvolvido para fins acadêmicos e de aprendizado em desenvolvimento Back-End com Node.js, Express, PostgreSQL e Prisma ORM.
