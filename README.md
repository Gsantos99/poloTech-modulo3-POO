# Polo tech Módulo 3: Programação Orientada a Objetos (POO)

![image](https://user-images.githubusercontent.com/94020264/213823919-5d47bbd1-f81a-4a4e-aba1-ef8d42061767.png)

### Lista de exercícios

### 1º exercício - Classes no JavaScript

Crie uma classe "Animal" que deve receber dois parâmetros no método construtor, nome e idade, e anotá-los em propriedades da classe. Além disso, ele também deve possuir um método chamado apresentar() que ao ser chamado exibirá a mensagem "Oi! Eu sou um Animal".

Crie classes "Mamifero", "Ave" e "Peixe". Essas classes devem herdar os atributos e métodos da classe "Animal". Crie atributos e métodos próprios para cada uma dessas classes. Lembre-se que, o método apresentar() precisa ser atualizado informando se o objeto é um Mamifero, Ave ou Peixe.

Sinta-se livre para criar novas classes extendendo "Ave" ou "Peixe".

Crie classes "Humano" e "Cachorro", ambos devem extender de "Mamifero". Assim como feito anteriormente, crie métodos e atributos para cada um deles.

Crie agora algumas classes de profissões como, por exemplo: "Advogado", "Medico" e "Desenvolvedor". Siga a mesma ideia do que foi solicitado anteriormente.

Extendendo de Desenvolvedor, crie um FrontEnd e um BackEnd. Cada um deles deve ter métodos próprios e aproveita para adicionar também condicionais, como, por exemplo, o desenvolvedor BackEnd pode ter um método chamado darDesculpa(), onde você gera um número aleatório. Se ele for par, exibe a mensagem "Na minha máquina funciona" e se for impar "Terminei! Falta só testar".

### 2º exercício - Simulador de Pokemon GO

Para nosso 2º exercício vamos tentar desenvolver um simulador de Pokemon GO aplicando todos os conceitos que aprendemos até agora durante as aulas. A ideia aqui é cadastrar diferentes tipo de pokemon e seus respectivos leveis. Também é necessário cadastrar um treinador. Nele devemos exibir quantos pokemon ele capturou até o momento.

Toda a tabalha deve ser automática. O que precisamos é criar uma função que faça o encontro entre o treinador e o pokemon selvagem. Ao encontrar o pokemon, esse treinador jogará uma pokebola para tentar capturá-lo. A chance do pokemon ser captura é gerada de forma aleatória considerando o level do pokemon e a quantidade de pokemons que o treinador tem. Quanto maior o level do pokemon, mais dificil será de capturá-lo. Quanto maior for a quantidade de pokemon do treinador, mais fácil será capturar um pokemon. Sinta-se a vontade para gerar a lógica que achar mais interessante. Só precisamos que siga essa regra.

Toda vez que uma pokebola é usada, dando certo ou errado, será preciso reduzir essa quantidade do treinador. Um treinador não pode ter menos de 0 pokebolas. Um treinador é capaz de levar até 10 pokebolas. Ele pode comprar a qualquer momento a qualquer momento essas pokebolas enquanto estiver fora de uma batalha.

Após 3 tentativas de captura, se não der certo, o pokemon selvagem automaticamente fugiu. Caso seja realizada a captura com sucesso, devemos incrementar a quantidade de pokemons que o treinador possui.

### 3º exercício - Todo List

A ToDo List deve ser capaz de:

<li> Listar atividades </li>

<li> Adicionar atividades </li>

<li> Deletar atividades </li>

<li> Editar atividades </li>

<li> Marcar atividades (concluida/nao-concluida) </li>

### 4º exercício - Crie sua própria Pokedex

Crie sua própria pokedex!

<li> Precisa ter cabeçalho, filtro de nome e a lista de pokemons </li>
<li> Pode filtrar somente os 151 (que são os melhores). </li>

Para isso basta consumir a Api PokéApi

<li>Lista de Pokemons: https://pokeapi.co/api/v2/pokemon?limit={numero_maximo} </li>
<li>Dados dos Pokemons: https://pokeapi.co/api/v2/pokemon/{nome_do_pokemon} </li>
