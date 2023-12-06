import { H1 } from "@/app/components/H1";
import { UpdateTaskForm } from "./UpdateTaskForm";
import { notFound } from "next/navigation";
import { sql } from '@vercel/postgres';

// Funkcjado pobrania danych konkretnego zadania
const getTask = taskId => sql`
    SELECT * FROM tasks
    WHERE id = ${taskId}
`
    .then(res => res.rows)
    .then(tasks => {
        // Jesli znaleziono takie zadanie, to zostanie zwrocona tablica z 1 elementem
        // Jesli nie znaleziono, to pusta tablica
        const [foundTask] = tasks;

        if (!foundTask) notFound();

        // Musimy zmapowac date z bazy danych na format YYYY-MM-DD
        const dueDate = new Date(foundTask.due_date);

        const year = dueDate.getFullYear();
        const month = dueDate.getMonth() + 1;
        const day = dueDate.getDate() > 9 ? dueDate.getDate() : `0${dueDate.getDate()}` ;

        return { ...foundTask, dueDate: `${year}-${month}-${day}` };
    })

// W next.js definiujemy dynamiczne parametry nazywajac katalog z wykorzystaniem nawiasow kwadratowych: [taskId] <- bedziemy mieli parametr dynamiczny taskId
export default async function EditTaskPage(props) {
    // Logi zobaczymy w git bash, a nie w konsoli przegladarkowej -> Next.js ten kawalek kodu wykonuje po stronie serwera
    console.log(props);
    // W ten sposob mozemy otrzymac wartosc dynamicznego parametru taskId
    const taskId = props.params.taskId;

    // pobranie konkretnego zadania
    const task = await getTask(taskId)

    return (
        <>
            <H1>Edytuj zadanie o ID: {taskId}</H1>

            <div className="px-6">
                {/* Przekazujemy task do formularza, zeby ustawic domyslne wartosci */}
                <UpdateTaskForm task={task} />
            </div>
        </>
    )
}