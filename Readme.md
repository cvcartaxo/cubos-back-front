# 🚀 Projeto Full Stack com Docker Compose  
Aplicação completa com **frontend**, **backend** e **banco de dados PostgreSQL**, totalmente containerizada com **Docker Compose**.  

---

## 📁 Estrutura do Projeto

├── backend/  
│   ├── Dockerfile  
│   ├── .env  
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

# 🐳 Comandos Docker - Projeto Full Stack

## 🚀 Subir os containers
```bash
docker compose up -d --build

🧩 Ver status dos containers
docker ps

📜 Ver logs em tempo real

docker compose logs -f

🧱 Recriar containers sem cache

docker compose build --no-cache

🛑 Parar containers
docker compose down