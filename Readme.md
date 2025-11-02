# 🚀 Projeto Full Stack com Docker Compose  
Aplicação completa com **frontend**, **backend** e **banco de dados PostgreSQL**, totalmente containerizada com **Docker Compose**.  

---

## 📁 Estrutura do Projeto

├── backend/
│ ├── Dockerfile
│ ├── .env
│ └── (código do backend)
│
├── frontend/
│ ├── Dockerfile
│ ├── nginx.conf
│ └── (código do frontend)
│
├── sql/
│ └── script_inicial.sql # opcional (executado ao subir o banco)
│
└── docker-compose.yml