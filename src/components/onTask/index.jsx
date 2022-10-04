import { OnTask } from './styles'
import layerDelete from '../../assets/LayerDelete.svg'
import Vector from '../../assets/Vector.png'
import VectorBlue from '../../assets/VectorBlue.svg'

export function TaskExist({ task, handleWithDoneButton, taskIndex, deleteTask  }) {

    function handleTaskToDelete() {
        deleteTask(task)
    }
    return (
        <div>
            <OnTask>
                <input  type="checkbox" onClick={() => {handleWithDoneButton(taskIndex)}}
                    style={{ backgroundImage: task.done ? `url(${Vector})` : `url(${VectorBlue})` }} />
                <div>
                    <p className='po'
                        style={{
                            color: task.done ? "#808080" : "#f2f2f2",
                            textDecoration: task.done ? "line-through" : "none"
                        }}>
                        {task.text}</p>
                </div>
                <img src={layerDelete} onClick={handleTaskToDelete} />
            </OnTask>
        </div>
    )
}

