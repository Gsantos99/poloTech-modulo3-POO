// ## 1º exercício

// Crie uma classe "Animal" que deve receber dois parâmetros no método construtor, nome e idade, e anotá-los em propriedades da classe. Além disso, ele também deve possuir um método chamado apresentar() que ao ser chamado exibirá a mensagem "Oi! Eu sou um Animal".

// Crie classes "Mamifero", "Ave" e "Peixe". Essas classes devem herdar os atributos e métodos da classe "Animal". Crie atributos e métodos próprios para cada uma dessas classes. Lembre-se que, o método apresentar() precisa ser atualizado informando se o objeto é um Mamifero, Ave ou Peixe.

// Sinta-se livre para criar novas classes extendendo "Ave" ou "Peixe".

// Crie classes "Humano" e "Cachorro", ambos devem extender de "Mamifero". Assim como feito anteriormente, crie métodos e atributos para cada um deles.

// Crie agora algumas classes de profissões como, por exemplo: "Advogado", "Medico" e "Desenvolvedor". Siga a mesma ideia do que foi solicitado anteriormente.

// Extendendo de Desenvolvedor, crie um FrontEnd e um BackEnd. Cada um deles deve ter métodos próprios e aproveita para adicionar também condicionais, como, por exemplo, o desenvolvedor BackEnd pode ter um método chamado darDesculpa(), onde você gera um número aleatório. Se ele for par, exibe a mensagem "Na minha máquina funciona" e se for impar "Terminei! Falta só testar".

class Animal {
  nome
  idade

  constructor(nome, idade) {
    ;(this.nome = nome), (this.idade = idade)
  }

  apresentar() {
    return `Oi! Eu sou um animal`
  }
}

// const animal1 = new Animal('Elefante', 5)
// console.log(animal1.apresentar())

class Mamifero extends Animal {
  nome
  idade
  temPelo 

  constructor(nome, idade, temPelo) {
    super(nome, idade)
    ;(this.nome = nome), (this.idade = idade), (this.temPelo = temPelo)
  }

  apresentar() {
    return `Oi! Eu sou um(a) ${this.nome} e sou mamifero`
  }
}

const mamifero1 = new Mamifero('lobo', 5, true)
console.log(mamifero1.apresentar())
