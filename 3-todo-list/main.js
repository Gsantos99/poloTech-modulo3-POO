import { Item } from './assets/classes/item.js'

// Exemplo de uma instância da Class item
const item1 = new Item('Treinar', '2023-02-01', 'normal')
// console.log(item1)

// Onde as tarefas serão inseridas!
const containerTarefas = document.querySelector('.lista-de-tarefas')
let listaDeTarefas = [] // vai receber os objetos

// Captura de informações do user
const descricao = document.querySelector('#input-tarefa')
const data = document.querySelector('#input-date')
const prioridade = document.querySelector('#select-options')
const btnForm = document.querySelector('#btn-form')

// Adição de uma nova tarefa
btnForm.addEventListener('click', e => {
  // Previne o submit
  e.preventDefault()

  // Cria objetos e manda dados para a função
  let tarefa = new Item(descricao.value, data.value, prioridade.value)
  listaDeTarefas.push(tarefa)
  inserirTarefa(tarefa.descricao, tarefa.data, tarefa.prioridade)

  limparForm()
  // salvarLista()
})

function limparForm() {
  descricao.value = ''
  data.value = ''
  prioridade.value = ''
}

function inserirTarefa(descricao, data, prioridade) {
  // TODO estilizar elemento da tarefa

  // 1 - Nova tarefa
  const novaTarefa = document.createElement('li')

  // 2 - Cria elementos que compõem a tarefa! (li)

  // Checkbox
  const divForm = document.createElement('div')
  const inputCheck = document.createElement('input')
  inputCheck.type = 'checkbox'

  // Discrição da tarefa
  const descricaoTarefa = document.createElement('label')
  descricaoTarefa.innerText = descricao

  divForm.appendChild(inputCheck)
  divForm.appendChild(descricaoTarefa)

  // Data e prioridade
  const prioridadeTarefa = document.createElement('p')
  prioridadeTarefa.innerText = prioridade

  const dataTarefa = document.createElement('p')
  dataTarefa.innerText = data

  // Botões
  const btnEditar = document.createElement('button')
  const btnExcluir = document.createElement('button')
  btnEditar.innerText = 'Editar'
  btnExcluir.innerText = 'Excluir'

  // 3 - Adiciona elementos no li inicial
  novaTarefa.appendChild(divForm)
  novaTarefa.appendChild(prioridadeTarefa)
  novaTarefa.appendChild(dataTarefa)
  novaTarefa.appendChild(btnEditar)
  novaTarefa.appendChild(btnExcluir)

  // 4 - Exibe na página
  containerTarefas.appendChild(novaTarefa)
}
