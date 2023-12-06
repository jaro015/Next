import { TaskForm } from "../TaskForm"
import { createTaskAction } from "./createTaskAction"

export const CreateTaskForm = () => {
    return (
        <TaskForm action={createTaskAction} />
    )
}