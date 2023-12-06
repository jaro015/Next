'use client'

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
// Biblioteka do debounce
import { useDebouncedCallback } from 'use-debounce'

export const TaskSearchInput = () => {
    // Zwraca informacje o aktualnym stanie search params'ow ( z paska adresu URL )
    const searchParams = useSearchParams();
    // Pobieramy informacje o aktualnej sciezce
    const pathname = usePathname();
    // Pobieramy router, ktory pozowli nam zmienic adres w pasku przegladarki
    const router = useRouter();

    const inputRef = useRef(null);

    useEffect(() => {
        if(inputRef.current) inputRef.current.focus();
    }, [])

    // Opozniamy wywolanie funkcji o 300ms
    const handleSearch = useDebouncedCallback(e => {
        const searchQuery = e.target.value;

        // Zdefiniujmy nowe search params na bazie poprzednich
        const newSearchParams = new URLSearchParams(searchParams);

        // Ustawmy search param o nazwie `search` na wartosc pola tekstowego lub go usunmy
        if (searchQuery) newSearchParams.set('search', searchQuery);
        else newSearchParams.delete('search');

        // Zaktualizujmy adres w pasku URL przegladarki
        router.replace(`${pathname}?${newSearchParams.toString()}`)
    }, 300);

    return (
        <input
            ref={inputRef}
            type="search"
            placeholder="Znajdz zadanie"
            className="border border-gray-400 p-4 my-4 w-full"
            onChange={handleSearch}
            // Ustawiamy domyslna wartosc w wyszukiwarce
            defaultValue={searchParams.get('search')?.toString()}
        />
    )
}