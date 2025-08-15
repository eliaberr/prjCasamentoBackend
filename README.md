💍 prjCasamentoBackend — API do Site de Casamento

Backend do projeto prjCasamento, responsável por fornecer e gerenciar dados do site, incluindo confirmação de presença, gerenciamento de presentes e integração com pagamentos via Pix.

> **Stack:** Node.js (JavaScript) • Deploy: Vercel  
> **Arquivos principais no repo:** `app.js`, `server.js`, `conexao.js`, `package.json`. :contentReference[oaicite:1]{index=1}  
> **Prod (About do repo):** prj-casamento-backend.vercel.app :contentReference[oaicite:2]{index=2}

---

## ✨ O que este backend cobre (escopo sugerido)

- Endpoints HTTP para:
  - **RSVP** — receber/confirmação de presença (ex.: criação de registro, validação de campos).
  - **Presentes** — listar opções, marcar como reservado/pago.
  - **Pix** — geração/validação de payload (BR Code) e/ou QR Code (server-side).
  - **Saúde** — `/health` para checagem de disponibilidade.
- **CORS** configurado para o domínio do frontend.
- **Conexão com banco** (ver `conexao.js`) — normalmente MySQL ou Postgres.
- **Variáveis de ambiente** (.env) para segredos e chaves.

> Observação: Ajuste os nomes de rotas/detalhes abaixo com o que estiver no seu `app.js`/`server.js`.

---

## 📦 Requisitos

- **Node.js** 18+  
- **npm** (ou **pnpm** / **yarn**)

---

## 🚀 Executando localmente

```bash
# 1) Clonar
git clone https://github.com/eliaberr/prjCasamentoBackend.git
cd prjCasamentoBackend

# 2) Instalar dependências
npm install
# ou: pnpm install / yarn

# 3) Variáveis de ambiente
cp .env.example .env
# edite .env com suas credenciais (veja seção abaixo)

# 4) Rodar em desenvolvimento
npm run dev
# (se usar nodemon) ou:
node server.js
# ou:
node app.js

# 5) Build/Start (se aplicável em produção)
npm start
