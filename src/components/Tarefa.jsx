function Tarefa({tarefa, deletarTarefa}) {
    return(
        <div className="tarefa">
            <div>
                <h2>{tarefa.texto}</h2>
                <p>{tarefa.horario}</p>
            </div>
            <button onClick={() => deletarTarefa(tarefa.id)} className="deletar" ><span className="material-symbols-outlined">close</span></button>
        </div>
    )
}

export default Tarefa

