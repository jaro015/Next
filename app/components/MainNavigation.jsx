'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export const MainNavigation = () => {
    const pathname = usePathname();

    console.log(pathname)

    return (
        <nav className="text-center my-4 space-x-4">
            <Link href="/" className={pathname === '/' ? 'text-indigo-500' : ''}>Start</Link>
            <Link href="/tasks" className={pathname === '/tasks' ? 'text-indigo-500' : ''}>Zadania</Link>
            <Link href="/tasks/new" className={pathname === '/tasks/new' ? 'text-indigo-500' : ''}>Nowe zadanie</Link>
        </nav>
    )
}