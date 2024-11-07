# Api de Livros
- Este projeto foi desenvolvido utilizando as tecnologias:
- ![Static Badge](https://img.shields.io/badge/NODEJS-%2300000)
  ![Static Badge](https://img.shields.io/badge/JAVASCRIPT-%23F7DF1E)
  ![Static Badge](https://img.shields.io/badge/MONGOOSE-%23880000)
  ![Static Badge](https://img.shields.io/badge/MONGODB-%2347A248)
  ![Static Badge](https://img.shields.io/badge/EXPRESS-%23000000)

#

Para acessar o banco de dados e necessário que você crie uma conta (caso não tenha) e um banco de dados atráves da plataforma **Atlas** do **MongoDB**. A seguir irei te mostrar um passo a passo de como criar o seu!  

# Criando o seu banco de dados
## Passo 1: Criar uma Conta no MongoDB Atlas 

1. Acesse o site [MongoDB Atlas](https://account.mongodb.com/account/login).
2. Clique em **Logar** para criar uma conta gratuita, ou faça login se você já tiver uma conta.
3. Preencha as informações necessárias (nome, email, senha) ou faça login com Google ou GitHub, caso prefira.

## Passo 2: Criar uma Organização
1. Após fazer login, clique em **Create New Organization** para criar um nova organização (ou escolha uma organização existente).
2. Dê um nome a sua organização, selecione a opção **MongoDB Atlas** e clique em Next.
3. Adicione membros e permissões, caso necessário, e clique em **Create Organization**.

## Passo 3: Criar um Projeto
1. Clique em **New Project** para criar um novo projeto (ou escolha um projeto existente).
2. Dê um nome ao seu projeto, por exemplo, "MeuProjeto" e clique em **Next**.
3. Adicione membros e permissões, caso necessário, e clique em **Create Project**.

## Passo 4: Configurar um Cluster
1. No painel do projeto, clique em **Create** para criar um novo cluster.
2. Escolha a opção **M0** para usar o plano gratuito.
3. Dê um nome ao seu cluster
3. Configure o cluster:
    - Cloud Provider & Region: **Selecione** o provedor de nuvem **AWS** e a região mais próxima de você.
4. Após as configurações, clique em **Create Deployment**.
> **Atenção: A criação do cluster pode levar alguns minutos.**

## Passo 5: Configurar Usuário e Senha de Acesso
1. Quando a opção anterior for clicada irá aparecer na tela área para conexão com o cluster.
2. Escolha um nome de usuário e senha para o seu banco de dados e clique em **Create Database User**.
> **Anote essas credenciais, pois você precisará delas para conectar-se ao banco de dados.**

## Passo 6: Configurar o Acesso ao IP
1. Ainda na mesma tela, vá até **Network Access**.
2. Clique em **Add IP Address** para definir os IPs autorizados a acessar o banco de dados.
3. Para acesso geral, clique em **Allow Access from Anywhere** (0.0.0.0/0) ou insira um IP específico.
4. Clique em **Confirm** para salvar as configurações.

## Passo 7: Conectar ao MongoDB Atlas
Agora que você tem o banco de dados configurado, pode se conectar a ele a partir de uma aplicação.

1. Volte a aba anterior, clique em **Chose a connection method**.
2. Escolha a opçao do **Drivers**.
3. Copie a **Connection String** fornecida.

## Passo 8: Criar um Banco de Dados e Coleção
1. No menu lateral esquedo clique em **Clusters**, e em seguida clique em **Browse Collections**.
2. Clique em **Add My Own Data** para criar um novo banco de dados e uma coleção.
3. Insira o nome do banco de dados e da coleção.
4. Clique em **Create** para salvar.

## Executando a aplicação
1. Para a instalação das dependências utilize o comando `npm i ou npm install`
2. Crie um arquivo na raiz do projeto chamado **.env**
3. Com o arquivo já criado crie um variável de ambiente chamada `STRING_CONEXAO_DB=` e cole a sua string de conexão.
4. Para executar o projeto digite `npm run dev`
> Na string de conexão: Antes do ponto de interrogação digite o nome do **database** utilizado