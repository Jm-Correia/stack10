# Exemplo de workspace
> Este projeto é um exemplo de configuração inicial 
> para desenvolvimento usando reactJS
>
> Neste exemplo foi utilizado um component Techlist
> onde é realizado a manipulação do estado do componente, utilizando os seguintes metodos:
> 
> 1º)
>```javaScript
> handleInputChange = e =>{
>       this.setState({newTech: e.target.value});
> }
>```
>2º)
>```javaScript
>   handleSubmit = e =>{
>        e.preventDefault();
>
>        this.setState({
>            techs: [... this.state.techs, this.state.newTech],
>            newTech: ''
>        });
>    }
>```

## Montagem do ambiente:

> Foi utilizado o [yarn](https://yarnpkg.com/getting-started) junto com o nodejs
> para a montagem deste ambiente.

## Após clonar o projeto

> Abra o terminal e vá até a pasta deste projeto
>
>No ubuntu (exemplo):
> ```sh
> $ cd ${PASTA_DO_CLONE}/modulo03
> ```
>
>Executar os seguintes comandos no terminal:
>
> ```sh
> $ yarn
> $ yarn dev
> ```
> Após executar aguarde a mensagem no terminal:
> ```sh
> ℹ ｢wdm｣: Compiled successfully.
> ```
> Abra seu browser Preferido e coloque 
> 
>  - url: http://localhost:8080



