
# 🎉 Projeto com Next.js e Prisma: Uma Aventura na Web!
🎈 Bem-vindo(a) a este repositório super animado! 🎈 Este é um projeto de treinamento **interno** ministrado especificamente para a **Avanade Brasil**. Juntos, mergulhamos no maravilhoso mundo do Next.js e do Prisma para criar uma aplicação web cheia de energia e estilo! 💃🕺

## 📌🔥 Pré-requisitos
- Node.js (18.x ou superior) 🟢
- npm 📦
- Conta no [Supabase](https://supabase.io/) 🗃️
- Conta na [Vercel](https://vercel.com/) ☁️ (Sim, precisamos dela!)

## 🛠️ Configuração do Ambiente

### Clonando o repositório e entrando no ritmo! 🎵
```bash
git clone https://github.com/barrosohub/avanade-treinamento-nextjs-app.git
cd avanade-treinamento-nextjs-app
```

### 1. 📝 Arquivos de Configuração:
- `.env.local`:
  ```plaintext
  NEXT_PUBLIC_URL_BASE=http://localhost:3000
  DATABASE_URL=[SUA_URL_POSTGRES]?pgbouncer=true
  DIRECT_URL=[SUA_URL_POSTGRES]
  ```

- `.env.production`:
  ```plaintext
  NEXT_PUBLIC_URL_BASE=https://${VERCEL_URL}
  DATABASE_URL=${DATABASE_URL}
  DIRECT_URL=${DATABASE_URL}
  ```

### 2. 📦 Instalação de Dependências (Vamos pegar tudo o que precisamos!):
```bash
npm i
```

### 3. 🗄️ Configuração do Prisma (DB):
```bash
npx dotenv -e .env.local -- npx prisma migrate dev --name init_db
```

### 🖥️ Execução do Projeto em Ambiente Local:
```bash
npm run dev
```

### 🚀 Execução com Build em Ambiente Local:
```bash
npm run build && npm run start
```

### 6. ☁️ Deploy na Vercel (Vamos para as nuvens!):
- Criar um projeto na [Vercel](https://vercel.com/docs/projects/overview)
- Após clonar o repositório do projeto, envie ele para seu Github pessoal. E depois, importe para a [Vercel](https://vercel.com/docs/getting-started-with-vercel/import)
- Configurar as [variáveis de ambiente](https://vercel.com/docs/projects/environment-variables)
- Configurar o build (conforme visto no vídeo super explicativo!)
- Fazer o deploy (e ver a mágica acontecer! 🌟)

## 📚📖 Referências (Porque sempre é bom ter onde consultar!):
- [Prisma e Supabase](https://www.prisma.io/docs/guides/database/supabase)
- [Deploy na Vercel](https://vercel.com/docs/deployments/git#deploying-a-git-repository)
- [Como habilitar CORS na Vercel](https://vercel.com/guides/how-to-enable-cors)
- [Supabase Official Site](https://supabase.com/)
- [API de ações do servidor Next.js](https://nextjs.org/docs/app/api-reference/functions/server-actions)
- [Convenções de arquivo do Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config)
