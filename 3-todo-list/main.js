import { Item } from './assets/classes/item.js'

// Exemplo de uma instância da Class item
const item1 = new Item('Treinar', '2023-02-01', 'normal')
// console.log(item1)

// Onde as tarefas serão exibidas!
const containerTarefas = document.querySelector('.lista-de-tarefas')

// Onde as tarefas serão inseridas!
let listaDeTarefas = baixarLista() 
console.log(listaDeTarefas)

// Captura de informações do user
const descricao = document.querySelector('#input-tarefa')
const data = document.querySelector('#input-date')
const prioridade = document.querySelector('#select-options')
const btnForm = document.querySelector('#btn-form')

// Adição de uma nova tarefa
btnForm.addEventListener('click', e => {
  // Previne o submit do form
  e.preventDefault()

  // Cria novos objetos e manda para função que cria eles

  const formValido =
    descricao.value != '' && data.value != '' && prioridade.value != ''

  if (formValido) {
    let tarefa = new Item(descricao.value, data.value, prioridade.value)
    // Adiciona tarefa no array
    listaDeTarefas.push(tarefa)

    // Salva lista
    salvarLista()

    // Cria elemento na página
    renderTarefa(tarefa.descricao, tarefa.data, tarefa.prioridade, tarefa.id)

    // Limpa formulário
    limparForm()

    console.log(listaDeTarefas)
  } else {
    alert('Preencher todos os campos')
  }
})

function salvarLista() {
  let listaString = JSON.stringify(listaDeTarefas)
  localStorage.setItem('lista de tarefas', listaString)
}

function baixarLista() {

  let listaString = localStorage.getItem('lista de tarefas')
  // Transforma a lista de string para array novamente 
  return JSON.parse(listaString) || []

}

function limparForm() {
  descricao.value = ''
  data.value = ''
  prioridade.value = ''
}

function editarTarefa(id) {
  alert(`EDITAR -> Item id = ${id}`)
}

function excluirTarefa(id) {
  
  // Exclui tarefa do array de tarefas
  listaDeTarefas.filter(tarefas => {
    return tarefas.id !== id })
 
  // Atualiza Lista
  salvarLista()

  // Seleciona o item pelo ID e remove da página 
  const itemRemovido = document.getElementById(`item:${id}`)
  itemRemovido.remove()

}

function renderTarefa(descricao, data, prioridade, id) {
  // TODO estilizar elemento da tarefa

  // 1 - Nova tarefa com ID único
  let novaTarefa = document.createElement('li')
  novaTarefa.id = `item:${id}`

  // 2 - Cria elementos que compõem a tarefa! (li)

  // Checkbox
  const divForm = document.createElement('div')
  const inputCheck = document.createElement('input')
  inputCheck.type = 'checkbox'
  inputCheck.id = id

  // Discrição da tarefa
  const descricaoTarefa = document.createElement('label')
  descricaoTarefa.setAttribute('for', id)
  descricaoTarefa.innerText = descricao

  // Add input + descrição no Div
  divForm.appendChild(inputCheck)
  divForm.appendChild(descricaoTarefa)

  // Data e prioridade
  const prioridadeTarefa = document.createElement('p')
  prioridadeTarefa.innerText = prioridade

  const dataTarefa = document.createElement('p')
  dataTarefa.innerText = data

  // Botões e escutadores!
  const btnEditar = document.createElement('button')
  btnEditar.innerText = 'Editar'

  btnEditar.addEventListener('click', () => {
    editarTarefa(id)
  })

  const btnExcluir = document.createElement('button')
  btnExcluir.innerText = 'Excluir'

  btnExcluir.addEventListener('click', () => {
    excluirTarefa(id)
  })

  // 3 - Adiciona elementos no li inicial
  novaTarefa.appendChild(divForm)
  novaTarefa.appendChild(prioridadeTarefa)
  novaTarefa.appendChild(dataTarefa)
  novaTarefa.appendChild(btnEditar)
  novaTarefa.appendChild(btnExcluir)

  // 4 - Exibe na página
  containerTarefas.appendChild(novaTarefa)
}


