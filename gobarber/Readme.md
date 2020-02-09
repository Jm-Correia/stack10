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

### Bibliotecas (*Libs*):
>  | Nome | Versão | Ambiente |
>  |------|-------|--------- |
>  |bcryptjs| __2.4.3__ | |
> |express | __4.17.1__ | |
> | jsonwebtoken | __8.5.1__| |
> | pg | __7.18.1__| |
> | pg-hstore | __2.3.3__| |
> | sequelize |  __5.21.3__ | |
> | YUP |  __0.28.1__ | |
> | multer |  __1.4.2__ | |
> |eslint| __6.8.0__|dev|
> |eslint-config-airbnb-base|__14.0.0__|dev|
> |eslint-config-prettier|__6.10.0__|dev|
> |eslint-plugin-import|__2.20.1__|dev|
> |eslint-plugin-prettier|__3.1.2__|dev|
> |nodemon| __2.0.2__| dev|
> |prettier| __1.19.1__| dev|
> |sequelize-cli|__5.5.1__| dev|
> |sucrase|__3.12.1__| dev|

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
> ```
> Instalar bibliotecas executando o comando:
> ```sh
> $ yarn
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

## Endpoints baseURL:*(http://localhost:3333)*
|Metódo| URL| Descrição | Autenticação |
|---- |---- | ---------|------ |
|POST |baseURL/session| Obter Token | Não |
|POST |baseURL/users| Cadastrar Usuário| Sim |
|PUT |baseURL/users | Atualizar Usuário| Sim |
|POST |baseURL/files| Upload do avatar (imagem)| Sim |


>  - No Insomnia adicionar na aba Auth "*Bearer Token*" o token retornado no metodo *"obter token"*

# Regras de Negócio:

## 1. Autenticação:

> Permitir que o usuário se autentique utilizando e-mail e senha.
>
> Exemplo:
> ```JSON
>{
>   "email": "fulanodeTAL@gmail.com",
>	"password": "123456"
>}
>```

## 2. Usuários:

### Cadastro / Atualizar:

> Pode ser relizado o cadastro e atualização de usuário no sistema.
>
>
>  #### Exemplos:
>  - Cadastrar:
>
> ```JSON
>{
>	"name": "FULANO de TAL",
>	"email": "fulanodeTAL@gmail.com",
>	"password": "123456"
>}
> ```
> - Atualizar:
> ``` JSON
> {
>   "name": "Fulano da Silva",
>	"email": "fulanoDaSilva@gmail.com",
>	"oldPassword": "123456",
>	"password": "123456",
>	"confirmPassword": "123456",
>	"avatar_id": 1
>}
> ```

# Licença:

### [MIT](https://opensource.org/licenses/MIT)
