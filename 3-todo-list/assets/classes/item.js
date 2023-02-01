// item1 = new Item('Fazer atividade', '2023-02-06', 'alta'); item2 = new Item('Ler um livro', '2023-02-06', 'normal'); item3 = new Item('Jogar Pokemon', '2023-02-06', 'altissima'); item4 = new Item('Assistir Pokemon', '2023-02-06', 'baixa');

// lista = [item1, item2, item3, item4];

// item1.editar('Fazer nova atividade', '2023-02-25', 'baixa'); item2.deletar(); item3.marcar(); item5 = new Item('Assistir Pokemon', '2023-02-06', 'baixa'); lista.adicionar(item5);

// Todo List métodos

// Adicionar atividades

// Deletar atividades

// Editar atividades

// Marcar atividades (concluida/nao-concluida)

// Plus: tag prioridade (baixa, normal, alta, altissima)

export class Item {
  descricao
  data
  prioridade
  status

  constructor(descricao, data, prioridade, status) {
    this.descricao = descricao
    this.data = data
    this.prioridade = prioridade
    this.status = status
  }

  // Métodos
  addTarefa() {
    //
  }

  deletarTarefa() {
    //
  }
  editarTarefa() {
    //
  }
  marcarTarefa() {
    //
  }
}

// const item1 = new Item('Treinar', '2023-02-01', 'normal', 'não concluída')
// console.log(item1)
