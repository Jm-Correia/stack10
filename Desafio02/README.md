# [Desafio 2](https://github.com/Rocketseat/bootcamp-gostack-desafio-02/blob/master/README.md#desafio-02-iniciando-aplicação)

## FastFeet, *Etapa 1* de *4*

### Este Desafio faz parte do bootCamp da *[Rocketseat - GoStack](https://rocketseat.com.br/)*

# Regras de Negócio:

## 1. Autenticação:

> Permitir que o usuário se autentique utilizando e-mail e senha.
>
> Exemplo:
> ```
>{
>   "email": "admin@fastfeet.com",
>	"password": "123456"
>}


## 2. Destinatários:

> O usuário logado do tipo __Administrador__ poderá *cadastrar/atualizar* destinatários na aplicação.
>
> ### Relacionamento ***Usuário*** (0,1 : 1,N) ***Destinatário***
>
>  #### Exemplos:
>  - Cadastrar:
>
> ```JSON
>{
> "address_line" : "3009 College Avenue",
> "zipcode": "1ZN OU789",
> "city": "Frederiction",
> "state": "NB",
> "country": "CANADA",
> "user_id": 1
>}
> ```
> - Atualizar:
> ``` JSON
> {
>  "id": 5,
>  "user_id": 1,
>  "address_line": "07 River Strett",
>  "zipcode": "24 OU789",
>  "city": "Frederiction",
>  "state": "NB",
>  "country": "CANADA"
>}
> ```

# Tecnologias

### Ferramentas:
> - [Nodejs - **v-10.13.0**](https://nodejs.org/en/)
> - [Yarn - **v-1.21.1**](https://yarnpkg.com/)
> - [Docker - **v-18.09.9**](https://www.docker.com/get-started)
>   - [Postgres no Docker](https://hub.docker.com/_/postgres)
> - [VsCode](https://code.visualstudio.com/)
> - [Insomnia](https://insomnia.rest/)

### Bibliotecas (*Libs*):
>  | Nome | Versão | Ambiente |
>  |------|-------|--------- |
>  |bcryptjs| __2.4.3__ | |
> |express | __4.17.1__ | |
> | jsonwebtoken | __8.5.1__| |
> | pg | __7.18.1__| |
> | pg-hstore | __2.3.3__| |
> | sequelize |  __5.21.3__ | |
> |eslint| __6.8.0__|dev|
> |eslint-config-airbnb-base|__14.0.0__|dev|
> |eslint-config-prettier|__6.10.0__|dev|
> |eslint-plugin-import|__2.20.1__|dev|
> |eslint-plugin-prettier|__3.1.2__|dev|
> |nodemon| __2.0.2__| dev|
> |prettier| __1.19.1__| dev|
> |sequelize-cli|__5.5.1__| dev|
> |sucrase|__3.12.1__| dev|


# Instalação:

> Clone o projeto para sua maquina executando o comando:
> ```Git
>  git clone https://github.com/Jm-Correia/stack10.git
> ```
> Instalar bibliotecas executando o comando:
> ```sh
> $ yarn
> ```
> Criar o banco de dados no docker usando o comando (LTS):
> ```sh
> $ docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
> ```
>  No terminal do vscode executar os comandos abaixo:
> ```sh
> $ yarn sequelize-cli db:migrate:all
> $ yarn sequelize-cli db:seed:all
> $ yarn dev
>  ou
> $ yarn dev:debug
> ```
>  - Pronto,
> Aplicação rodando!!!

## Endpoints baseURL:*(http://localhost:4400)*
|Metódo| URL| Descrição |
|---- |---- | ---------|
|POST |baseURL/session| Obter Token |
|POST |baseURL/recipients| Cadastrar Destinatários|
|PUT |baseURL/recipients | Atualizar Destinatários|

# Licença:

### [MIT](https://opensource.org/licenses/MIT)
