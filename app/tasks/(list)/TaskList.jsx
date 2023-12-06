import Link from "next/link"
import { CompleteButton } from "./CompleteButton"
import { sleep } from "@/app/utils/sleep";
import { sql } from '@vercel/postgres';

const listTasks = async (query, hideCompleted) => {
    // TO simulate long request for showing loader
    // await sleep(3000, null);

    // Jesli ma ukryc ukonczone, to popros json-server, zeby zwrocil takie zadania, ktore maja pole completed = false
    // const completeFilter = hideCompleted ? '&completed=false' : '';

    // return fetch(`http://localhost:3003/tasks?q=${query || ''}&_sort=completed,dueDate&_order=asc,asc${completeFilter}`)
    //     .then(res => res.json())

    // Pobierz wszystkie zadania
    return sql`SELECT * FROM tasks`
        .then(res => res.rows)
        // Przefiltruj je bazujac na argumentach
        .then(tasks => tasks.filter(task => task.title.toLowerCase().includes(query?.toLowerCase() || '')))
        .then(tasks => {
            if (!hideCompleted) return tasks;

            return tasks.filter(task => !task.completed)
        });
        // TODO sorting
};


export const TaskList = async ({ search, hideCompleted }) => {
    const tasks = await listTasks(search, hideCompleted);

    return (
        <>
            {tasks.length === 0 && <p>Brak zadan do zrobienia :)</p>}

            {tasks.length > 0 && (
                <ul className="px-6 mt-8 space-y-2">
                    {tasks.map(task => (
                        // Dodajemy klase line-through tylko dla ukonczonych zadan
                        <li key={task.id} className={`border border-gray-400 p-4 ${task.completed ? 'line-through' : ''}`}>
                            {/* Wyswietlamy przycisk tylko wtedy, kiedy zadanie jest nieukonczone */}
                            {!task.completed && <CompleteButton taskId={task.id} />}
                            {task.title} <time className="text-xs italic inline-block mr-2">{task.dueDate}</time>
                            <Link href={`/tasks/${task.id}/edit`}>Edytuj</Link>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}