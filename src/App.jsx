import { useEffect, useState } from 'react'
import Tarefa from './components/Tarefa'
import React from 'react'

function App() {
  const tarefasResgatadas = JSON.parse(localStorage.getItem("tarefaslocais"))
  const [tarefas, setTarefas] = useState(tarefasResgatadas ? tarefasResgatadas : [])

  const adicionarTarefa = () => {
    const textoNovaTarefa = document.getElementById('inputtexto')
    const horarioNovaTarefa = document.getElementById('inputhorario')
    if (textoNovaTarefa.value && horarioNovaTarefa.value) {
    const novaTarefa = [
      ...tarefas,
      {
        id: Math.floor(Math.random() * 10000),
        texto: textoNovaTarefa.value,
        horario: "Horário: " + horarioNovaTarefa.value
      }
    ]
    setTarefas(novaTarefa)
    textoNovaTarefa.value = ""
    horarioNovaTarefa.value = ""
    const salvarTarefas = localStorage.setItem("tarefaslocais", JSON.stringify(novaTarefa))
    } else {
      window.alert('Erro! Insira um valor nos dois campos.')
    }
  }

  const deletarTarefa = (id) => {
    const tarefasFiltradas = [...tarefas].filter((tarefa) =>
    tarefa.id !== id ? tarefa : null)
    setTarefas(tarefasFiltradas)
    const salvarTarefas = localStorage.setItem("tarefaslocais", JSON.stringify(tarefasFiltradas))
  }

  const [buscartexto, setBuscartexto] = useState("")
  const buscar = () => {
     setBuscartexto(document.getElementById("busca").value) 
  }

  return (
      <div id='main'>
        <h1>Lista de tarefas</h1>
        <div id="containertarefas">
          <h3>Nova Tarefa...</h3>
          <div id="novatarefa">
            <input type="text" id="inputtexto" placeholder='Adicionar titulo'/>
            <input type="datetime" id="inputhorario" placeholder='Adicionar Horário'/>
            <button onClick={adicionarTarefa}>Adicionar tarefa</button>
          </div>
          <div id="buscar">
            <h3>Pesquisar...</h3>
            <input type="text" id="busca" onChange={buscar}/>
          </div>
          {tarefas.filter((tarefa) => tarefa.texto.toLowerCase().includes(buscartexto.toLowerCase())).map((tarefa) =>
              <Tarefa key={tarefa.id} tarefa={tarefa} deletarTarefa={deletarTarefa}/>
            )
          }
        </div>
      </div>
  )
}

export default App
