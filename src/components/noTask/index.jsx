import React from 'react'
import { NoTask } from './styles'
import clipBoard from "../../assets/Clipboard.svg"

export function TaskNotExist() {
    return (
        <NoTask >
            <div>
                <img src={clipBoard} />
                <p>Você ainda não tem tarefas cadastradas</p>
                <p id="footerNoTask">Crie tarefas e organize seus itens a fazer</p>
            </div>
        </NoTask>
    )
}
