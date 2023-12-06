'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export const HideCompletedTasksFilter = () => {
    // Zwraca informacje o aktualnym stanie search params'ow ( z paska adresu URL )
    const searchParams = useSearchParams();
    // Pobieramy informacje o aktualnej sciezce
    const pathname = usePathname();
    // Pobieramy router, ktory pozowli nam zmienic adres w pasku przegladarki
    const router = useRouter();

    const handleChange = e => {
        const hideCompleted = e.target.checked;

        // Zdefiniujmy nowe search params na bazie poprzednich
        const newSearchParams = new URLSearchParams(searchParams);

        // Ustawmy search param o nazwie `search` na wartosc pola tekstowego lub go usunmy
        if (hideCompleted) newSearchParams.set('hideCompleted', true);
        else newSearchParams.delete('hideCompleted');

        // Zaktualizujmy adres w pasku URL przegladarki
        router.replace(`${pathname}?${newSearchParams.toString()}`)
    };

    return (
        <label>
            <input
                type="checkbox"
                className="mr-2"
                onChange={handleChange}
                // Ustawiamy domyslna wartosc w wyszukiwarce
                defaultChecked={searchParams.get('hideCompleted')?.toString()}
            />

            Ukryj zrobione
        </label>
    )
}