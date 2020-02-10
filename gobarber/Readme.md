# :warning: GoStack :warning:

## *goBarber*:

> Este projeto é um serviço de agendamento para usuários marcarem uma hora na barbearia preferida.


> Este projeto faz parte das aulas do bootCamp da *[Rocketseat - GoStack](https://rocketseat.com.br/gostack)*.


# Tecnologias

### Ferramentas:
> - [Nodejs - **v-10.13.0**](https://nodejs.org/en/)
> - [Yarn - **v-1.21.1**](https://yarnpkg.com/)
> - [Docker - **v-18.09.9**](https://www.docker.com/get-started)
>   - [Postgres no Docker](https://hub.docker.com/_/postgres)
> - [VsCode](https://code.visualstudio.com/)
> - [Insomnia](https://insomnia.rest/)

### Bibliotecas:

> Para saber quais bibliotecas foram utilizadas [clique Aqui](Readme/Bibliotecas.md)

# Executar Projeto:

> Criar o banco de dados no docker utilizando o comando (LTS):
> ```sh
> $ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
> ```
> Clone o projeto para sua maquina executando o comando:
> ```Git
>  git clone https://github.com/Jm-Correia/stack10.git
> ```
> Dentro do diretorio que foi clonado executar:
> ```sh
> $ cd gobarber/
>```
> Criar as pasta (*tmp/* e *tmp/uploads/*) na raiz do projeto:
> ```sh
> $ mkdir tmp && cd tmp && mkdir upload
> ```

> Retornar para raiz do projeto e executar o comando:
> ```sh
> $ code .
> ```

#### Abrir o terminal do vscode:

> Instalar bibliotecas:
> ```sh
> $ yarn
> ```
> Criar Banco de dados:
> ```sh
> $ yarn sequelize-cli db:migrate:all
> ```
> Inciar Projeto:
> ```sh
> $ yarn dev
>  ou
> $ yarn dev:debug
> ```
- Pronto, Aplicação rodando!!!

## Endpoints baseURL:*(http://localhost:3333)*

> __Para maiores detalhes verificar as rotas dentro do arquivo: [*Routes.js*](src/router.js)__

|Metódo| URL| Descrição | Autenticação |
|---- |---- | ---------|------ |
|POST |baseURL/session| Obter Token | Não |
|POST |baseURL/users| Cadastrar Usuário| Sim |
|PUT |baseURL/users | Atualizar Usuário| Sim |
|POST |baseURL/file| Upload do avatar (imagem)| Sim |


>  - No Insomnia adicionar na aba Auth "*Bearer Token*" o token retornado no metodo *"obter token"*

# Regras de Negócio:

## 1. Autenticação:

> - Para visualizar o exemplo [clique aqui](Readme/regrasNegocio/Autenticacao.md).

## 2. Usuários:

> - Para visualizar o exemplo [clique aqui](Readme/regrasNegocio/Usuarios.md).

## 3. Upload File:

> - Para visualizar o exemplo [clique aqui](Readme/regrasNegocio/upload.md).

# Licença:

### [MIT](https://opensource.org/licenses/MIT)
