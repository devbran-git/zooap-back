# Desafio ZooApp - API REST

## Objetivo

API REST para gerenciamento de animais e cuidados, demonstrando habilidades em lógica de programação, validação, CRUD completo e filtragem.

## Tecnologias

- Node.js + Express
- TypeScript
- Prisma ORM
- SQL Server
- Zod para validação

## Endpoints

### Animais (`/animals`)

| Método | Rota           | Descrição                                                                 |
| ------ | -------------- | ------------------------------------------------------------------------- |
| POST   | `/animals`     | Criar animal                                                              |
| GET    | `/animals`     | Listar animais (filtros opcionais: `habitat`, `species`, `originCountry`) |
| GET    | `/animals/:id` | Buscar animal por ID                                                      |
| PUT    | `/animals/:id` | Atualizar animal                                                          |
| DELETE | `/animals/:id` | Remover animal                                                            |

**Exemplo de filtros:**

```

GET /animals?habitat=Floresta
GET /animals?species=Rinoceronte
GET /animals?originCountry=Brasil
GET /animals?habitat=Savana&species=Leão

```

### Cuidados (`/cares`)

| Método | Rota         | Descrição             |
| ------ | ------------ | --------------------- |
| POST   | `/cares`     | Criar cuidado         |
| GET    | `/cares`     | Listar todos          |
| GET    | `/cares/:id` | Buscar cuidado por ID |
| PUT    | `/cares/:id` | Atualizar cuidado     |
| DELETE | `/cares/:id` | Remover cuidado       |

### Associação Animal ↔ Cuidado (`/animal-care`)

| Método | Rota                                   | Descrição                    |
| ------ | -------------------------------------- | ---------------------------- |
| POST   | `/animal-care/:animalId/cares/:careId` | Associar cuidado a animal    |
| DELETE | `/animal-care/:animalId/cares/:careId` | Remover associação           |
| GET    | `/animal-care/:animalId/cares`         | Listar cuidados de um animal |
| GET    | `/animal-care/care/:careId/animals`    | Listar animais de um cuidado |

## Validações

- Campos obrigatórios: `name`, `description`, `birthDate`, `species`, `habitat`, `originCountry`.
- `birthDate` no formato `YYYY-MM-DD`.
- IDs numéricos.
- Filtros opcionais para listagem de animais.

## Como Rodar

1. Instalar dependências:

```bash
npm install
```

2. Configurar `.env` com a string de conexão do SQL Server:

```
DATABASE_URL="sqlserver://USER:PASSWORD@HOST:PORT;database=DB_NAME"
```

3. Gerar cliente Prisma:

```bash
npx prisma generate
```

4. Rodar seed para popular dados iniciais:

```bash
npx ts-node prisma/seed.ts
```

5. Iniciar servidor:

```bash
npm run dev
```

## Observações

- CRUD completo para animais e cuidados.
- Validação com Zod integrada nas rotas.
- Filtragem de animais no backend via query params.
- Associação entre animais e cuidados com prevenção de duplicidade.
