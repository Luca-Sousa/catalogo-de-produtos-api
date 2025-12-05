# Catálogo de Produtos API

API RESTful para gerenciamento de catálogo de produtos, desenvolvida com Node.js, Express e MySQL.

## 🚀 Tecnologias

- Node.js
- Express.js
- MySQL
- mysql2

## 📋 Funcionalidades

- ✅ CRUD completo de produtos
- ✅ Filtro por categoria
- ✅ Ordenação por preço (crescente/decrescente)
- ✅ Listagem de categorias disponíveis
- ✅ Validação de dados
- ✅ Tratamento de erros

## 📦 Estrutura do Projeto

```
catalogo-de-produtos-api/
├── src/
│   ├── config/
│   │   └── db.js              # Configuração do banco de dados
│   ├── controllers/
│   │   └── produtoController.js # Controladores das rotas
│   ├── models/
│   │   └── produtoModel.js    # Modelo de dados
│   ├── routes/
│   │   └── produtoRoutes.js   # Definição das rotas
│   ├── services/
│   │   └── produtoService.js  # Lógica de negócio
│   └── server.js              # Servidor Express
├── database.sql               # Script de criação do banco
└── package.json
```
### Iniciar o servidor

**Modo desenvolvimento (com nodemon):**
```bash
npm run dev
```

**Modo produção:**
```bash
npm start
```

O servidor estará rodando em `http://localhost:3000`

## 📚 Endpoints da API

### Produtos

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| GET | `/api/produtos` | Lista todos os produtos |
| GET | `/api/produtos?categoria=Eletrônicos` | Filtra por categoria |
| GET | `/api/produtos?ordenar=preco_asc` | Ordena por preço crescente |
| GET | `/api/produtos?ordenar=preco_desc` | Ordena por preço decrescente |
| GET | `/api/produtos/:id` | Busca produto por ID |
| POST | `/api/produtos` | Cria novo produto |
| PUT | `/api/produtos/:id` | Atualiza produto |
| DELETE | `/api/produtos/:id` | Deleta produto |
| GET | `/api/produtos/categorias` | Lista categorias |

## 📝 Exemplos de Uso

### Criar Produto
```bash
POST /api/produtos
Content-Type: application/json

{
  "nome": "Produto Teste",
  "preco": 99.90,
  "descricao": "Descrição do produto",
  "categoria": "Eletrônicos",
  "estoque": 10
}
```

### Listar Produtos
```bash
GET /api/produtos
```

### Filtrar por Categoria
```bash
GET /api/produtos?categoria=Eletrônicos
```

### Ordenar por Preço
```bash
GET /api/produtos?ordenar=preco_asc
GET /api/produtos?ordenar=preco_desc
```

### Buscar por ID
```bash
GET /api/produtos/1
```

### Atualizar Produto
```bash
PUT /api/produtos/1
Content-Type: application/json

{
  "nome": "Produto Atualizado",
  "preco": 149.90,
  "descricao": "Nova descrição",
  "categoria": "Eletrônicos",
  "estoque": 20
}
```

### Deletar Produto
```bash
DELETE /api/produtos/1
```

### Listar Categorias
```bash
GET /api/produtos/categorias
```

## 🗄️ Estrutura do Banco de Dados

### Tabela: produtos

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INT | ID único (chave primária) |
| nome | VARCHAR(255) | Nome do produto |
| preco | DECIMAL(10,2) | Preço do produto |
| descricao | TEXT | Descrição detalhada |
| categoria | VARCHAR(100) | Categoria do produto |
| estoque | INT | Quantidade em estoque |
| created_at | TIMESTAMP | Data de criação |
| updated_at | TIMESTAMP | Data de atualização |

## ✅ Validações

- Nome: obrigatório
- Preço: obrigatório, numérico, >= 0
- Categoria: obrigatória
- Estoque: obrigatório, numérico, >= 0
- Descrição: opcional

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais.

## 👤 Autor

Desenvolvido como projeto acadêmico de Desenvolvimento WEB.
