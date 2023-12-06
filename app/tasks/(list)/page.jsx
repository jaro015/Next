import { Suspense } from "react";
import { GeneratedAt } from "../../components/GeneratedAt";
import { H1 } from "../../components/H1";
import { StatCard } from "../../components/StatCard";
import { sleep } from "../../utils/sleep";
import { TaskStats, TasksSkeleton } from "./TaskStats";
import { CompleteButton } from "./CompleteButton";
import Link from "next/link";
import { TaskSearchInput } from "./TaskSearchInput";
import { TaskList } from "./TaskList";
import { HideCompletedTasksFilter } from "./HideCompletedTasksFilter";

// Wymuszenie aby strona byla generowana na zadanie ( next.js domyslnie bedzie probowal wygenerowac strony statyczne )
export const dynamic = 'force-dynamic';


// Moge oznaczyc komponnet serwerowy jako async. Dzieki czemu w ramach renderowania tego komponentu, moge poczekac ( await ) na pobranie danych i dopiero na ich podstawie wyrenderowac HTML
export default async function TaskListPage(props) {
    // W props mam informacje o search paramasach
    // const tasks = await listTasks(props.searchParams.search);

    return (
        <>
            <H1>Lista Zadan</H1>

            <GeneratedAt />

            {/* Czekajac na wygenerowanie i pobranie <TaskStats /> wyswietl <TasksSkeleton /> */}
            {/* UWAGA: Suspense jest z react!  */}
            {/* Komentuje, poniewaz dlugo trwaladowanie tej sekcji  */}
            {/* <Suspense fallback={<TasksSkeleton />}>
                <TaskStats />
            </Suspense> */}

            <TaskSearchInput />

            <div className="text-right">
                <HideCompletedTasksFilter />
            </div>

            {/* Korzystamy z Suspense, aby poczekac doladowanie zmienionej listy zadan */}
            {/* UWAGA: trzeba zdefiniowac prop `key`. Wtedy react wprost przy zmianie jego wartosci zadba o przerenderowanie, co w naszym przypadku bedzie oznaczac pokazanie stanu ladowania */}
            <Suspense key={props.searchParams.search} fallback={<>Loading your tasks ...</>}>
                <TaskList
                    search={props.searchParams.search}
                    hideCompleted={props.searchParams.hideCompleted}
                />
            </Suspense>
        </>
    );
}