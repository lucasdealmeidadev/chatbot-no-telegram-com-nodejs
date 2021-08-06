## Chatbot no Telegram com JavaScript e NodeJS

![Preview](https://github.com/lucasdealmeidadev/chatbot-no-telegram-com-nodejs/blob/main/boot.jpg?raw=true)

Chatbot Fit é um bot que recomenda vídeos do YouTube para exercícios de musculação, feito em JavaScript e NodeJS. Esse projeto foi uma ampliação da aula ministrada por **Carlos Victor Gomes** na **Digital Innovation One**.

Foram adicionados os seguintes recursos ao projeto:

- **Dotenv** é uma ferramenta utilizada para orquestrar as variáveis ambiente no projeto;
- **Nodemon** é uma ferramenta que ajuda no processo de desenvolvimento de aplicações em Node.js, onde automaticamente detecta os arquivos alterados e reinicia a aplicação;
- Por fim, com o **Sucrase** no projeto podemos utilizar Javascript Moderno.

### 1) Para instalar o NodeJS
- [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm) (Linux e Mac) - Mais fácil para gerenciar as versões do NodeJS na máquina
- [https://nodejs.org/en/](https://nodejs.org/en/) (Windows, Linux e Mac)

### 2) IDE para desenvolvimento
- [https://code.visualstudio.com/](https://code.visualstudio.com/)

### 3) NPM (Gerenciador de pacotes do NodeJS)
- [https://www.npmjs.com](https://www.npmjs.com)

### 4) Telegram
- [https://web.telegram.org/](https://web.telegram.org/)

#### Criando o bot
- Se inscreva no Telegram (Você pode usar o cliente web, desktop ou mobile)
- Abra o aplicativo ou acesse o website
- Pesquise por @BotFather e inicie a conversa
- Envie o comanndo /newbot e execute as instruções
- Armazene o token enviado pelo @BotFather (Vamos usá-lo no código)

### 5) Bibliotecas utilizadas no projeto

* **[Dialogflow](https://www.npmjs.com/package/dialogflow)**
* **[Dotenv](https://www.npmjs.com/package/dotenv)**
* **[Node.js Telegram Bot API](https://www.npmjs.com/package/node-telegram-bot-api)**
* **[Youtube Node](https://www.npmjs.com/package/youtube-node)**
* **[Nodemon](https://www.npmjs.com/package/nodemon)**
* **[Sucrase](https://www.npmjs.com/package/sucrase)**

### 6) Criando o fluxo de conversa no Dialogflow
- [https://dialogflow.com/](https://dialogflow.com/)
- Crie um novo agent
- Escolha um projeto já existente ou crie um projeto novo
- Clique na engrenagem para configurar o agent
- Clique no service id, você será redirecionado para o painel do GCP, clique nos 3 pontinhos abaixo de ações e crie uma chave to tipo json
- Após o download da chave, substitua o conteúdo do arquivo **service-bot.exemple.json** pelo conteúdo da sua chave
- Crie uma nova intenção chamada "Treino específico"
- Adicione frases de treinamento com algumas partes do corpo
- Defina entidades do tipo "corpo" e seus sinônimos

### 7) Para gerar credenciais
- [https://console.developers.google.com/start/api?id=youtube](https://console.developers.google.com/start/api?id=youtube) (Youtube)
- [https://console.cloud.google.com/iam-admin/serviceaccounts](https://console.cloud.google.com/iam-admin/serviceaccounts) (Dialogflow) Lembrar de ir na conta de serviço criada pelo Dialogflow e gerar seu arquivo json com suas credenciais

###  8) Arquivo .env
Altere o arquivo `.env.example` para `.env` e insira suas credencias geradas.
```
> TOKEN= # TOKEN DO TELEGRAM
> YOUTUBE_KEY= # KEY DO YOUTUBE
```
###  9) Arquivo service-bot.exemple.json
Altere o arquivo `service-bot.exemple.json` para `service-bot.json`

### 10) Para rodar o projeto
- Efetuar o clone do repositório em uma pasta do sistema operacional
- Executar o comando `npm install` dentro da pasta raiz do projeto para baixar as dependências
- Substituir os arquivos de credenciais do agent e do youtube
- Executar o comando `npm start` dentro da pasta raiz do projeto para executar o código


## 🚩 Tenho dúvidas... O que fazer? 

Caso tenham dúvidas sobre o código do projeto, sintam-se a vontade em abrir uma **[ISSUE AQUI](https://github.com/lucasdealmeidadev/chatbot-no-telegram-com-nodejs/issues)**. Assim que possível, estarei respondendo as todas as dúvidas que tiverem!

## Licença

* Licenciado sob a licença MIT - veja [LICENSE](https://github.com/lucasdealmeidadev/chatbot-no-telegram-com-nodejs/blob/main/LICENSE) para mais informações.

----------

Desenvolvido por Lucas de Almeida Monteiro (:  👋  [ Entrar em contato!!](https://www.linkedin.com/in/lucas-almeida-145a4513a)