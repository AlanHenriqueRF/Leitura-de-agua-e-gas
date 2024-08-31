# Leitura de Água e Gás

## Sobre
Este projeto foi desenvolvido como parte de um teste técnico para a Shopper. O objetivo é criar um serviço de leitura individualizada de consumo de água e gás, utilizando uma API de reconhecimento de imagens para extrair dados de medição de fotos de medidores. A aplicação consiste em uma API REST desenvolvida em Node.js com TypeScript, utilizando Docker para conteinerização e Prisma para gerenciamento do banco de dados.

## Tecnologias
- **Node.js** - Plataforma de desenvolvimento para a construção da API.
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática ao código.
- **Express** - Framework para construção de aplicações web em Node.js.
- **Prisma** - ORM para interação com o banco de dados PostgreSQL.
- **PostgreSQL** - Banco de dados relacional utilizado para armazenar as medições.
- **Docker** - Ferramenta de conteinerização para garantir o ambiente de execução consistente.
- **Google Gemini API** - Utilizada para reconhecimento de caracteres em imagens.
- **Joi** - Biblioteca de validação de dados.
- **ESLint e Prettier** - Ferramentas para padronização e linting do código.
- **Nodemon** - Ferramenta para desenvolvimento com auto-reload da aplicação.

## Como rodar?
### Pré-requisitos
- Docker e Docker Compose instalados em sua máquina.
- Uma chave de API para o Google Gemini.
- `Node.js v18`

## Passos
### 1 - Instale todas as depências
```bash
npm i
```

### 2 - Configure as variaveis do arquivo .env, o link do database e a chave da api do Gemini que pode conseguir aqui
```bash
https://ai.google.dev/gemini-api/docs/api-key
```

Use o arquivo `.env.example` como exemplo e crie seu próprio arquivo `.env` na raiz do projeto.

### 3 - Rode o projeto com o comando

```bash
docker compose up
```

# Considerações finais
Este projeto foi desenvolvido com foco em boas práticas de desenvolvimento, incluindo validação de dados, arquitetura limpa, e o uso de containers para facilitar a execução em diferentes ambientes.
