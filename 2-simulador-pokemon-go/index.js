// Para nosso 2º exercício vamos tentar desenvolver um simulador de Pokemon GO aplicando todos os conceitos que aprendemos até agora durante as aulas. A ideia aqui é cadastrar diferentes tipos de pokemons e seus respectivos leveis. Também é necessário cadastrar um treinador. Nele devemos exibir quantos pokemon ele capturou até o momento.

// Toda a batalha deve ser automática. O que precisamos é criar uma função que faça o encontro entre o treinador e o pokemon selvagem. Ao encontrar o pokemon, esse treinador jogará uma pokebola para tentar capturá-lo. A chance do pokemon ser capturado é gerada de forma aleatória considerando o level do pokemon e a quantidade de pokemons que o treinador tem. Quanto maior o level do pokemon, mais dificil será de capturá-lo. Quanto maior for a quantidade de pokemon do treinador, mais fácil será capturar um pokemon. Sinta-se a vontade para gerar a lógica que achar mais interessante. Só precisamos que siga essa regra.

// Toda vez que uma pokebola é usada, dando certo ou errado, será preciso reduzir essa quantidade do treinador. Um treinador não pode ter menos de 0 pokebolas. Um treinador é capaz de levar até 10 pokebolas. Ele pode comprar a qualquer momento a qualquer momento essas pokebolas enquanto estiver fora de uma batalha.

// Após 3 tentativas de captura, se não der certo, o pokemon selvagem automaticamente fugiu. Caso seja realizada a captura com sucesso, devemos incrementar a quantidade de pokemons que o treinador possui.

// Simulador de pokemon Go


// Classes


class Treinador {
  nome
  idade
  cidade
  qtdPokemons // quantos pokemons foram capturados
  qtdPokebolas

  constructor(nome, idade, cidade, qtdPokemons, qtdPokebolas) {
    ;(this.nome = nome),
      (this.idade = idade),
      (this.cidade = cidade),
      (this.qtdPokemons = qtdPokemons)

    // Impede o cadastro de um novo treinador com mais de 10 pokebolas
    if (qtdPokebolas >= 0 && qtdPokebolas <= 10) {
      this.qtdPokebolas = qtdPokebolas
    } else {
      throw `Quantidade de bolas inválidas, tente uma quantidasde de 0 a 10`
    }
  }

  // Getters
  get pokemons() {
    let condicao = this.qtdPokemons > 1 || this.qtdPokemons < 1

    if (condicao) {
      return `${this.nome} tem ${this.qtdPokemons} pokemons`
    }

    return `${this.nome} tem ${this.qtdPokemons} pokemon`
  }

  get pokebolas() {
    let condicao = this.qtdPokebolas > 1 || this.qtdPokebolas < 1

    if (condicao) {
      return `${this.nome} tem ${this.qtdPokebolas} pokebolas`
    }
    return `${this.nome} tem ${this.qtdPokebolas} pokebola`
  }

  // Método para comprar pokebolas
  comprarPokebola(qtdPokebolas) {
    // Impede o treinador de carregar mais de 10 pokebolas

    if (this.qtdPokebolas + qtdPokebolas >= 10) {
      console.log(`Quantidade máxima de pokebolas atingidas!`)
      return (this.qtdPokebolas = 10)
    }

    return (this.qtdPokebolas += qtdPokebolas)
  }
}

// TODO level do pokemon é aleatório

class Pokemon {
  nome
  tipo
  nivel
  selvagem

  // TODO melhorar esse erro, colocar um try e catch
  constructor(nome, tipo, nivel, selvagem) {
    ;(this.nome = nome), (this.tipo = tipo)
    if (nivel >= 1 && nivel <= 100) {
      this.nivel = nivel
    } else {
      throw `Nível inválido, pokemons podem ter um nível de 1 a 100`
    }
    this.selvagem = selvagem
  }
}

// Função de batalha

function batalhar(treinador, pokemon) {
  treinador.qtdPokebolas--

  // TODO Criar limitador de tentativas

  let chanceCaptura = Math.floor(Math.random() * 99 + 1)

  if (!pokemon.selvagem) {
    return `${pokemon.nome} não é selvagem!`
  }

  if (treinador.qtdPokebolas < 1) {
    return `Você está sem pokebolas! `
  }

  if (chanceCaptura >= 0 && chanceCaptura <= 25) {
    return `${pokemon.nome} escapou da pokebola! `
  }

  if (chanceCaptura >= 25 && chanceCaptura <= 50) {
    return `${pokemon.nome} escapou da pokebola! `
  }

  if (chanceCaptura >= 50 && chanceCaptura <= 100) {
    // Aumento a quantidade de pokemons do treinador!
    pokemon.selvagem = false
    treinador.qtdPokemons++
    return `${pokemon.nome} foi capturado! `
  }
}

// Instanciando as classes
const treinador1 = new Treinador('Ash', 15, 'Pallet', 5, 5)
const pokemon1 = new Pokemon('Pikachu', 'Elétrico', 15, true)

console.log(treinador1)
