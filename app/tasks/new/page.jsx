import { GeneratedAt } from "@/app/components/GeneratedAt";
import { H1 } from "../../components/H1";
import { sleep } from "@/app/utils/sleep";
import { CreateTaskForm } from "./CreateTaskForm";
import { ThrowErrorWhileRendering } from "@/app/utils/ThrowErrorWhileRendering";

export default async function NewTaskPage() {
    // Opoznienie renderowania tej strony -> W miedzyczasie pokaze sie odziedziczony loading z /tasks
    // await sleep(5_000, {});

    return (
        <>
            <H1>Dodaj nowe zadanie</H1>

            <GeneratedAt />

            {/* W ten sposob mozemy zasymulowac blad podczas renderowania i odpowiedni plik error.jsx zostanie wykorzystany, aby wyswietlic informacje o bledzie */}
            {/* <ThrowErrorWhileRendering /> */}

            <CreateTaskForm />
        </>
    );
}