# 🚀 Projeto Full Stack com Docker Compose  
Aplicação completa com **frontend**, **backend** e **banco de dados PostgreSQL**, totalmente containerizada com **Docker Compose**.  

---

#### Clone este repositório
git clone git@github.com:cvcartaxo/cubos-back-front.git

cd cubos-back-front

## 📁 Estrutura do Projeto

├── backend/  
│   ├── Dockerfile 
|   |-- .env (Esse arquivo não deve ser versionado, apenas criado de forma local)
│   └── (código do backend)  
│  
├── frontend/  
│   ├── Dockerfile  
│   ├── nginx.conf  
│   └── (código do frontend)  
│  
├── sql/  
│   └── script_inicial.sql   # opcional (executado ao subir o banco)  
│  
└── docker-compose.yml

### ⚙️ Pré-requisitos

Antes de rodar o projeto, certifique-se de ter instalado:

- **Docker**  
  [Instalação do Docker](https://docs.docker.com/get-docker/)

- **Sistema compatível:** Windows, macOS ou Linux

E preciso configurar um arquivo .env dentro da pasta do backend local "Dados de exemplo a seguir˜.

* DB_USER=cartaxo_cubos
* DB_PASS=cubos_12345
* DB_HOST=cubos-db
* DB_PORT=5432
* DB_NAME=cubos
* PORT=3000

###  Subir os containers
```bash
# Build e inicialização do projeto
Este comando deve ser executado na raiz do projeto.
docker compose up -d --build

#Ver status dos containers
docker ps

#Ver logs em tempo real
docker compose logs -f

Estes comandos não sáo obrigatorios !!
# Recriar containers sem cache
docker compose build --no-cache

# Parar containers
docker compose down
```

### Como acessar a aplicação de forma local.

http://127.0.0.1/

