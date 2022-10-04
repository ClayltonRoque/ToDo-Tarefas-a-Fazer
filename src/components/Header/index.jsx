import { HeaderOfPage, HeaderForm, TaskHeader } from './styles'
import img from '../../assets/rocket.svg'
import iconePlus from '../../assets/plus.svg'
import React, { useState, useEffect } from 'react'
import { TaskExist } from '../onTask'
import { TaskNotExist } from '../noTask'

export function Header() {

    const [tasks, setTasks] = useState(() => {
        const saved = localStorage.getItem('tasks')
        const initialValue = JSON.parse(saved)
        return initialValue || []
    })

    function handleWithDoneButton(taskIndex) {
        let tempTaks = [...tasks];
        let task = {...tempTaks[taskIndex]};
        task.done = !task.done;
        tempTaks[taskIndex] = task;
        setTasks(tempTaks)
    }

    const [newTask, setNewTask] = useState({})

    useEffect(() => {
        setConcluidoCount(tasks.filter(task => task.done == true).length)
    }, [tasks])

    const [concluidoCount, setConcluidoCount] = useState(() => {
        const saved = localStorage.getItem('tasks')
        const initialValue = JSON.parse(saved) ? JSON.parse(saved).filter(task => task.done == true).length : 0
        return initialValue 
    })


    function handleCreateNewTaskText(event) {
        setNewTask({text: event.target.value, done: false})
    }

    function handleCreateNewTask(event) {
        event.preventDefault()

        setTasks([...tasks, newTask])
        setNewTask({})
    }

    function handleDeleteTask(withoutTask) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task !== withoutTask
        })
        setTasks(tasksWithoutDeletedOne)
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    },[tasks])

    return (
        <div>
            <HeaderOfPage>
                <header>
                    <img src={img} alt="" />
                    to<span>do</span>
                </header>
            </HeaderOfPage>

            <HeaderForm onSubmit={handleCreateNewTask}>
                <input onChange={handleCreateNewTaskText} value={newTask.text} placeholder='Adicionar uma nova tarefa' />
                <button type='submit'>Criar<img src={iconePlus}></img></button>
            </HeaderForm>

            <TaskHeader>
                <header>
                    <span>Tarefas criadas<strong>{tasks.length}</strong></span>
                    <span id='spanConcluida'>Concluidas<strong>{concluidoCount}</strong></span>
                </header>
            </TaskHeader>

            {tasks.length ? tasks.map((task, index) => {
                return (
                    <TaskExist key={task} handleWithDoneButton={handleWithDoneButton} taskIndex={index} deleteTask={handleDeleteTask} task={task}></TaskExist>
                )
            }) : (
                <TaskNotExist />
            )}
        </div>
    )
}


