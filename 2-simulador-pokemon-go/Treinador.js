import { pokemonsSelvagens, selecionaPokemonAleatorio } from './Pokemon.js'

export class Treinador {
  #nome
  #idade
  #cidade
  #qtdPokemons
  #qtdPokebolas
  #iniciouJornada

  constructor(nome, idade, cidade) {
    ;(this.#nome = nome),
      (this.#idade = idade),
      (this.#cidade = cidade),
      (this.#qtdPokemons = 0),
      (this.#qtdPokebolas = 0)
    this.#iniciouJornada = false
  }

  // Getters

  get nome() {
    return this.#nome
  }

  get idade() {
    return this.#idade
  }

  get cidade() {
    return this.#cidade
  }

  get qtdPokemons() {
    let condicao = this.#qtdPokemons < 1 || this.#qtdPokemons === 1

    if (condicao) {
      return `${this.#nome} tem ${this.#qtdPokemons} pokemon`
    }

    return `${this.#nome} tem ${this.#qtdPokemons} pokemons`
  }

  get qtdPokebolas() {
    let condicao = this.#qtdPokebolas < 1 || this.#qtdPokebolas === 1

    if (condicao) {
      return `${this.#nome} tem ${this.#qtdPokebolas} pokebola`
    }
    return `${this.#nome} tem ${this.#qtdPokebolas} pokebolas`
  }

  // Setters e métodos

  set qtdPokebolas(novaQuantidade) {
    this.#qtdPokebolas += novaQuantidade
  }

  set qtdPokemons(novaQuantidade) {
    this.#qtdPokemons += novaQuantidade
  }

  iniciarJornada() {
    if (this.#iniciouJornada) {
      console.log(`${this.#nome} já iniciou sua jornada!`)
      return
    }

    this.#qtdPokebolas += 5
    this.#qtdPokemons += 1
    this.#iniciouJornada = true

    console.log(`${this.#nome} iniciou sua jornada Pokemon!`)
    return
  }

  // Método para comprar pokebolas
  comprarPokebola(qtdPokebolas) {
    // Impede o treinador de carregar mais de 10 pokebolas

    if (this.#qtdPokebolas + qtdPokebolas >= 10) {
      console.log(`Quantidade máxima de pokebolas atingidas!`)
      return (this.#qtdPokebolas = 10)
    }

    return (this.#qtdPokebolas += qtdPokebolas)
  }
}

export function batalhar(treinador) {
  const condicao = treinador.qtdPokebolas < 1
  if (condicao) {
    return `Você está sem pokebolas! Compre mais para batalhar`
  }

  treinador.qtdPokebolas = -1

  let pokemonAleatorio = selecionaPokemonAleatorio(pokemonsSelvagens)

  console.log(
    `${pokemonAleatorio.nome} LV(${pokemonAleatorio.nivel}) apareceu!`
  )

  let chanceCaptura = Math.floor(Math.random() * 99 + 1)

  if (chanceCaptura >= 0 && chanceCaptura <= 50) {
    return `${pokemonAleatorio.nome} escapou da pokebola! `
  }

  if (chanceCaptura >= 50 && chanceCaptura <= 100) {
    pokemonAleatorio.selvagem = false
    treinador.qtdPokemons = 1
    return `${pokemonAleatorio.nome} foi capturado! `
  }
}

console.log('--------- Começo do Jogo ---------------------------')
const treinadorX = new Treinador('Giulyano', 23, 'Recife')
console.log(treinadorX.qtdPokebolas)
console.log(treinadorX.qtdPokemons)

console.log('---------- Inicio da jornada -----------------------')
treinadorX.iniciarJornada()
console.log(treinadorX.qtdPokebolas)
console.log(treinadorX.qtdPokemons)

console.log('---------- Explorando o ambiente -----------------------')
console.log(batalhar(treinadorX))
console.log(treinadorX.qtdPokebolas)
console.log(treinadorX.qtdPokemons)
