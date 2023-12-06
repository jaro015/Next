import { H1 } from "@/app/components/H1";
import { UpdateTaskForm } from "./UpdateTaskForm";
import { notFound } from "next/navigation";

// Funkcjado pobrania danych konkretnego zadania
const getTask = taskId => fetch(`http://localhost:3003/tasks/${taskId}`)
    .then(res => {
        if (res.status === 404) notFound();

        return res.json();
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