import Link from "next/link";

// Ten layout bedzie dostepny dla strony /tasks i wszystkich podstron 
// Na stronie / nie zobaczymy tej nawigacji
export default function TasksLayout({ children }) {
    return (
        <>
            <nav className="text-xs text-center mb-4">
                <Link href="/">Start</Link> / <Link href="/tasks">Zadania</Link>
            </nav>

            {children}
        </>
    );
}