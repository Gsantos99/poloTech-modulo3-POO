export class Pokemon {
  #nome
  #nivel
  #selvagem = true

  constructor(nome) {
    this.#nome = nome
    this.#nivel = Math.floor(Math.random() * 99 + 1)
  }

  get nome() {
    return this.#nome
  }

  get nivel() {
    return this.#nivel
  }

  set selvagem(novoStatus) {
     (this.#selvagem = novoStatus)
  }
}

 const pokemonsSelvagens = [
  new Pokemon('Pidgey'),
  new Pokemon('Rattata'),
  new Pokemon('Gastly'),
  new Pokemon('Grimer'),
  new Pokemon('Slowpoke'),
  new Pokemon('Magikarp'),
  new Pokemon('Psyduck'),
  new Pokemon('Vulpix'),
  new Pokemon('Oddish'),
  new Pokemon('Geodude'),
  new Pokemon('Arcanine'),
  new Pokemon('Golbat'),
  new Pokemon('Abra'),
  new Pokemon('Charmander'),
  new Pokemon('Pidgeotto'),
  new Pokemon('Hitmonchan')
]

export function selecionaPokemonAleatorio(array) {
  const indexAleatorio = Math.floor(Math.random() * array.length)
  return array[indexAleatorio]
}

export {pokemonsSelvagens}
