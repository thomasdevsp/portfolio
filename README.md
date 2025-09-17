# 🚀 Thomas Sampaio - Site

🔗 **Acesse o site aqui:** [thomassampaio.com.br](https://www.thomassampaio.com.br/)

Um projeto de portfólio moderno e responsivo, construído com **Next.js** e integrado com a **Notion API** para gerenciamento de conteúdo dinâmico.

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| :--- | :--- |
| **Next.js** | Framework React para produção, fornecendo roteamento, *bundling* e otimizações de performance. |
| **TypeScript** | Linguagem que adiciona tipagem estática ao JavaScript. |
| **MUI Material** | Biblioteca popular de componentes React baseada no Material Design. |
| **Notion API** | Utilizada para buscar e renderizar dados do banco de dados (por exemplo, posts de blog, projetos, etc.). |

-----

## 💻 Como Rodar Localmente

Siga estas etapas para configurar e rodar o projeto na sua máquina:

### 1\. Pré-requisitos

Certifique-se de ter instalado:

  * Node.js (versão recomendada)
  * npm, yarn, pnpm ou bun

### 2\. Clone o Repositório

```bash
git clone https://www.youtube.com/watch?v=GRf6so_sois
cd [Nome da Pasta do Projeto]
```

*(**Atenção:** Certifique-se de substituir a URL acima pelo link do seu repositório Git.)*

### 3\. Instale as Dependências

```bash
npm install
# ou
yarn install
```

### 4\. Configuração das Variáveis de Ambiente

Crie um arquivo chamado **`.env.local`** na raiz do projeto e adicione suas chaves da Notion API:

```
# .env.local

# Chave de integração da Notion
NOTION_TOKEN=[Seu Token de Integração da Notion]

# ID do seu banco de dados (ex: para posts de blog ou projetos)
NOTION_DATABASE_ID=[ID do Seu Banco de Dados]
```

  * *(**Dica:** Você precisará criar uma integração no Notion e compartilhar seu banco de dados com ela.)*

### 5\. Inicie o Servidor de Desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) no seu navegador para ver o resultado. As mudanças no código serão automaticamente atualizadas.

-----

## 🌐 Deploy

Este projeto está implantado na **Vercel** e pode ser acessado em:

➡️ **[https://www.thomassampaio.com.br/](https://www.thomassampaio.com.br/)**
