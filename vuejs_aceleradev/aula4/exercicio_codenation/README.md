# Praticar a manipulação do DOM criando um "Verificador de Palíndromo"

Finalmente começaremos a estudar o Vue! Nesta primeira parte você vai aprender todos os conceitos básicos do Vue, de seu "Ciclo de vida" até o que são, para o que servem e como criar Componentes!Com este conhecimento, o seu objetivo sera de refatorar a aplicação da semana 3 usando Vue e a sua reatividade!

## Requisitos

Você precisará do Nodejs (LTS ou Current) instalado em sua máquina.

Na primeira execução rodar o comando:

```bash
$ npm install
```

## Tópicos

Com esse desafio, você aprenderá:

- O que é o Vue
- Lifecycle
- Directives
- Reatividade (two-way binding)
- Eventos
- Componentes

### Tarefas

- Deve-se criar um arquivo `index.html` dentro do diretório 'public'
- Adicionar o `Vue` a página via `CDN`
- Ler o conteúdo de um campo `input` ao pressionar a tecla `enter`
- Se o texto __for__ um palíndromo, exibir o texto com um indicador positivo
- Se o texto __não for__ um palíndromo, exibir o texto com um indicador negativo
- Limpar o `input` depois da verificação
- Manter a lista de verificações
- Adicionar um botão para "limpar o histórico" 
- Se o conteúdo do input estiver em branco (vazio), não faça nada.

### Exemplo

![](https://codenation-challenges.s3-us-west-1.amazonaws.com/vue-0/l5gAaPL+-+Imgur.gif)

### Atenção

O `input` do formulário __deve__ conter um atributo `data-test` com o valor `entrada`
O botão de "limpar o histórico" __deve__ conter um atributo `data-test` com o valor de `limpar-dados`
O element que o texto verificado se encontra __deve__ conter um atributo `data-verificado` com o valor `positivo` ou `negativo` respectivamente.
