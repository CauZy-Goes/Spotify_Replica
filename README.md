# 🎵 Spotify Clone

Um clone do Spotify desenvolvido com **React** e **Node.js**, utilizando **MongoDB** como banco de dados. O projeto exibe os artistas e músicas mais populares, além de permitir a navegação por páginas específicas de artistas e músicas.

## 🚀 Tecnologias Utilizadas

### **Front-end**
- ⚡ **Vite** - Para criação do projeto React
- ⚛️ **React** - Biblioteca para construção da interface
- 🔀 **React Router** - Para navegação entre as páginas
- 📡 **Axios** - Para consumir a API do back-end

### **Back-end**
- 🚀 **Node.js** - Para criação do servidor
- 🏗 **Express** - Para gerenciamento das rotas da API
- 🗄 **MongoDB** - Banco de dados para armazenar artistas e músicas

## 📌 Funcionalidades

### 🎨 **Front-end**
- Página inicial exibindo os artistas mais populares
- Lista das músicas mais tocadas
- Página de um artista com suas músicas
- Página de detalhes de uma música
- Design bonito e responsivo

### 🛠 **Back-end**
- API com **Express** que fornece dados de artistas e músicas
- Rotas **GET** para buscar os artistas e músicas do banco de dados
- Integração com **MongoDB** para armazenar e recuperar informações

## 📂 Estrutura do Projeto

```
📦 spotify-clone
├── 📁 back-end
│   ├── 📁 api
│   │   ├── 📄 connect.js  # Conexão com o MongoDB
│   │   ├── 📄 insertMany.js  # Inserção de dados no banco
│   │   ├── 📄 server.js  # Configuração do servidor Express
│   ├── 📄 package.json  # Dependências do backend
│   ├── 📄 .gitignore  # Arquivos ignorados no Git
│
├── 📁 front-end
│   ├── 📁 .vite  # Configuração do Vite
│   ├── 📁 src
│   │   ├── 📁 assets  # Recursos estáticos
│   │   ├── 📁 components  # Componentes reutilizáveis
│   │   ├── 📁 pages  # Páginas do React
│   │   ├── 📄 App.jsx  # Configuração principal do React
│   │   ├── 📄 main.jsx  # Arquivo de entrada
│   │   ├── 📄 index.css  # Estilos globais
│   ├── 📄 index.html  # Arquivo principal HTML
│   ├── 📄 vite.config.js  # Configuração do Vite
│   ├── 📄 package.json  # Dependências do frontend
│   ├── 📄 .gitignore  # Arquivos ignorados no Git
│
├── 📄 README.md  # Documentação do projeto
```

## 📷 Imagens do Projeto

### Página Inicial
![Página Inicial](https://github.com/CauZy-Goes/Spotify_Replica/blob/main/Spotify_Imgs/main.png)

### Página da Música
![Página da Música](https://github.com/CauZy-Goes/Spotify_Replica/blob/main/Spotify_Imgs/song.png)

### Página do Cantor
![Página do Cantor](https://github.com/CauZy-Goes/Spotify_Replica/blob/main/Spotify_Imgs/singer.png)

## 📦 Como Rodar o Projeto

### 🔧 **Rodando o Backend**

#### 🔗 Configurando a Conexão com o MongoDB

Antes de iniciar o servidor, configure a conexão com o banco de dados no arquivo `db.js`:

```javascript
import { MongoClient } from "mongodb";

const URI = "mongodb+srv://<NOME DO USUARIO MONGODB><SENHA USUARIO MONGODB>@cluster0.dhtco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("Spotify_Replica");
```


1. Acesse a pasta do backend:
   ```sh
   cd backend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o servidor:
   ```sh
   npm start
   ```

### 🎨 **Rodando o Frontend**

1. Acesse a pasta do frontend:
   ```sh
   cd frontend
   ```
2. Instale as dependências:
   ```sh
   npm install
   ```
3. Inicie o projeto:
   ```sh
   npm run dev
   ```

## 🧑‍💻 Desenvolvedor

Feito por Cauã Farias 🎶

