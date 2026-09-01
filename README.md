# 💬 Mensageria Anônima

Uma API para envio e recebimento de **mensagens anônimas**, permitindo que pessoas recebam mensagens através de um link público sem que a identidade do remetente seja exposta.

O projeto foi desenvolvido com foco em uma arquitetura simples, organizada e preparada para lidar com **validação, moderação de conteúdo e proteção contra abuso**.

## ✨ Funcionalidades

- 🕵️ **Envio de mensagens anônimas**
- 🔗 **Links públicos personalizados** para cada destinatário
- 💬 Armazenamento das mensagens recebidas
- 🛡️ **Moderação automática de conteúdo**
- 🚫 Registro de tentativas de envio bloqueadas sem armazenar o conteúdo ofensivo
- ⏱️ **Rate limiting** para ajudar a prevenir abuso da API
- 🗄️ Persistência de dados utilizando PostgreSQL
- 🧩 ORM com Prisma
- 🐳 Ambiente de banco de dados utilizando Docker Compose
- ✅ Validação de dados com `class-validator`
- 🧪 Testes unitários e E2E

## 🏗️ Arquitetura

```text
mensageria-anonima/
├── backend/
│   ├── prisma/
│   │   ├── migrations/
│   │   └── schema.prisma
│   │
│   ├── src/
│   │   ├── messages/
│   │   │   ├── dto/
│   │   │   ├── messages.controller.ts
│   │   │   ├── messages.module.ts
│   │   │   └── messages.service.ts
│   │   │
│   │   ├── moderation/
│   │   │   └── moderation.service.ts
│   │   │
│   │   ├── prisma/
│   │   └── app.module.ts
│   │
│   ├── .env.example
│   ├── docker-compose.yml
│   ├── package.json
│   └── tsconfig.json
│
└── README.md
```

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| Node.js | Runtime |
| TypeScript | Linguagem principal |
| NestJS | Framework do backend |
| PostgreSQL | Banco de dados |
| Prisma | ORM |
| Docker | Containerização |
| Docker Compose | Gerenciamento do ambiente |
| class-validator | Validação de dados |
| Jest | Testes |
| ESLint | Análise de código |
| Prettier | Formatação |

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, certifique-se de possuir:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- Docker Compose
- Git

### 1. Clone o repositório

```bash
git clone https://github.com/namartinxs/mensageria-anonima.git
```
cd mensageria-anonima
### 2. Acesse o backend
```
cd backend
```
### 3. Instale as dependências
```
npm install
```
### 4. Configure as variáveis de ambiente
Crie o arquivo .env utilizando o .env.example como referência:
```
cp .env.example .env
```
### 5. Inicie o banco de dados
```
npm run db:up
```
### 6.Execute as migrations
```
npx prisma migrate dev
```
### 7.Inicie a aplicação
Para ambiente de desenvolvimento:
```
npm run start:dev
```
