import { TaskForm } from "../../TaskForm"
import { updateTaskAction } from "./updateTaskAction"

export const UpdateTaskForm = ({ task }) => {
    return (
        <TaskForm
            // Przekazanie jako pierwszy argument do akcji serwerowej taskId
            action={updateTaskAction.bind(null, task.id)}
            task={task}
        />
    )
}