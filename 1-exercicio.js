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

const animal1 = new Animal('Elefante', 5)
// console.log(animal1.apresentar())

class Mamifero extends Animal {
  #temPelo

  constructor(nome, idade, temPelo) {
    super(nome, idade)
    ;(this.nome = nome), (this.idade = idade), (this.#temPelo = temPelo)
  }

  apresentar() {
    return `Oi! Eu sou um(a) ${this.nome}, sou mamifero e ${
      this.#temPelo ? 'tenho pelos' : 'não tenho pelos'
    }`
  }
}

const mamifero1 = new Mamifero('Lobo', 5, true, 'teste')
// console.log(mamifero1.apresentar())

class Ave extends Animal {
  podeVoar

  constructor(nome, idade, podeVoar) {
    super(nome, idade)
    ;(this.nome = nome), (this.idade = idade), (this.podeVoar = podeVoar)
  }

  apresentar() {
    return `Oi! Eu sou um(a)${this.nome}e sou uma ave`
  }

  voar() {
    return `${this.nome}está voando!`
  }
}

const ave1 = new Ave('Pombo ', 5, true)
// console.log(ave1.voar())

class Peixe extends Animal {
  respiraDebaixoDaAgua

  constructor(nome, idade, respiraDebaixoDaAgua) {
    super(nome, idade)
    ;(this.nome = nome),
      (this.idade = idade),
      (this.respiraDebaixoDaAgua = respiraDebaixoDaAgua)
  }

  apresentar() {
    return `Oi! Eu me chamo ${this.nome} e sou um peixe`
  }

  nadar() {
    return `${this.nome} está nadando!`
  }
}

const peixe1 = new Peixe('Nemo', 3, true)
// console.log(peixe1.nadar())

class Humano extends Mamifero {
  sobrenome
  cpf
  endereco

  constructor(nome, sobrenome, idade, cpf, endereco) {
    super(nome, idade)
    this.nome = nome
    this.idade = idade
    this.sobrenome = sobrenome
    this.cpf = cpf
    this.endereco = endereco
  }

  apresentar() {
    return `Oi, me chamo ${this.nome} e sou humano(a)`
  }
}

const humano1 = new Humano(
  'Giulyano',
  'Santos',
  23,
  true,
  8172817223,
  'Rua ABC DO DEF'
)

// console.log(humano1.apresentar())

class Cachorro extends Mamifero {
  raca

  constructor(nome, raca, idade, temPelo) {
    super(nome, idade, temPelo)
    this.nome = nome
    this.raca = raca
    this.idade = idade
    this.temPelo = temPelo
  }

  apresentar() {
    return `Oi! Eu sou ${this.nome} e sou cachorro`
  }

  latir() {
    return `${this.nome} está latindo!`
  }
}

const dog1 = new Cachorro('Tobinho', 'pastor alemão', 2, true)
// console.log(dog1.latir())

class Desenvolvedor extends Humano {
  tecnologia
  sistemaQueUtiliza
  anosDeXP

  constructor(
    nome,
    sobrenome,
    idade,
    cpf,
    endereco,
    tecnologia,
    sistemaQueUtiliza,
    anosDeXP
  ) {
    super(nome, sobrenome, idade, cpf, endereco)
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.cpf = cpf
    this.endereco = endereco
    this.tecnologia = tecnologia
    this.anosDeXP = anosDeXP
    this.sistemaQueUtiliza = sistemaQueUtiliza
  }

  apresentar() {
    return `Olá, me chamo ${this.nome} e sou um desenvolvedor(a)`
  }

  maisInfo() {
    return `Tenho ${this.anosDeXP} anos de experiência e sei as seguintes tecnologias: ${this.tecnologia} `
  }
}

const dev1 = new Desenvolvedor(
  'Felipe',
  'Silva',
  25,
  128718271,
  'Rua Baker 221B',
  ['HTML', 'CSS', 'JavaScript', 'React', 'SQL', 'Node'],
  'Linux',
  5
)

// console.log(dev1.maisInfo())

class FrontEndDev extends Desenvolvedor {
  constructor(
    nome,
    sobrenome,
    idade,
    cpf,
    endereco,
    tecnologia,
    sistemaQueUtiliza,
    anosDeXP
  ) {
    super(
      nome,
      sobrenome,
      idade,
      cpf,
      endereco,
      tecnologia,
      sistemaQueUtiliza,
      anosDeXP
    )

    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.cpf = cpf
    this.endereco = endereco
    this.tecnologia = tecnologia
    this.anosDeXP = anosDeXP
    this.sistemaQueUtiliza = sistemaQueUtiliza
  }

  reclamaComUx() {
    return `A culpa é do UX! `
  }
}
class BackEndDev extends Desenvolvedor {
  constructor(
    nome,
    sobrenome,
    idade,
    cpf,
    endereco,
    tecnologia,
    sistemaQueUtiliza,
    anosDeXP
  ) {
    super(
      nome,
      sobrenome,
      idade,
      cpf,
      endereco,
      tecnologia,
      sistemaQueUtiliza,
      anosDeXP
    )

    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade
    this.cpf = cpf
    this.endereco = endereco
    this.tecnologia = tecnologia
    this.anosDeXP = anosDeXP
    this.sistemaQueUtiliza = sistemaQueUtiliza
  }

  darDesculpa() {
    let numeroAleatorio = Math.floor(Math.random() * 10 + 1)
    if (numeroAleatorio % 2 === 0) {
      return `Na minha máquina funciona`
    } else {
      return `Terminei! Falta só testar`
    }
  }
}

const frontDev1 = new FrontEndDev(
  'Jon',
  'Snow',
  24,
  1276712612,
  'Winterfell',
  ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Google Cloud'],
  'Windows',
  7
)
const backDev1 = new BackEndDev(
  'Bob',
  'Esponja',
  35,
  989127212,
  'Fenda do bikini',
  ['JavaScript', 'Node', 'MongoDB', 'Express', 'Aws'],
  'MacOs',
  10
)

// console.log(frontDev1.maisInfo())
console.log(backDev1.darDesculpa())
