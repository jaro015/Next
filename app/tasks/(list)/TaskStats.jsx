import { StatCard } from "@/app/components/StatCard";
import { sleep } from "@/app/utils/sleep";

const getTaskStats = () => {
    // Poczekaj 4s i po tym czasie zwroc obiekt ( Symulacja dlugiego generowania strony )
    return sleep(4_000, {
        completed: 1,
        todo: 2,
        overdue: 0
    });
}

export const TaskStats = async () => {
    const taskStats = await getTaskStats();

    return (
        <div className="flex justify-center text-center px-6 my-6">
            <StatCard title="Ukonczono" value={taskStats.completed} />

            <StatCard title="Do zrobienia" value={taskStats.todo} />

            <StatCard title="Zalegle" value={taskStats.overdue} />
        </div>
    );
};

// Komponent wyswietlajacy ladny skeleton 
export const TasksSkeleton = () => {
    return (
        <div className="px-6 my-6 flex justify-center">
            {/* animate-pulse -> klasa dodajaca animacje pulsacji (tailwindcss docs) */}
            <div className="bg-red-300 w-40 h-24 mx-4 animate-pulse" />
            <div className="bg-red-300 w-40 h-24 mx-4 animate-pulse" />
            <div className="bg-red-300 w-40 h-24 mx-4 animate-pulse" />
        </div>
    );
}