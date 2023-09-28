# Projeto com Next.js e Prisma
(treinamento ministrado para Avanade Brasil)

## Pré-requisitos
- Node.js (18.x ou superior)
- npm
- Conta no [Supabase](https://supabase.io/)

## Configuração do Ambiente

1. **Arquivos de Configuração**:
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

2. **Instalação de Dependências**:
   ```bash
   npm i
    ```
3. **Configuração do Prisma (DB)**:
    ```bash
    npx dotenv -e .env.local -- npx prisma migrate dev --name init_db
    ```
4. **Execução do Projeto**:
    ```bash
    npm run dev
    ```
5. **Publicação do Projeto**:
    ```bash
    npm run build
    npm run start
    ```
6. **Deploy na Vercel**:

    - Criar um projeto na Vercel
    - Criar um ambiente de produção
    - Configurar as variáveis de ambiente
    - Configurar o build e o start
    - Fazer o deploy

## Referências
https://www.prisma.io/docs/guides/database/supabase
https://vercel.com/docs/deployments/git#deploying-a-git-repository
