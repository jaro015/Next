'use server'

import { sleep } from '@/app/utils/sleep';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';

// Dodawanie nowych zadan do bazy danych
const createTask = dto => sql`
    INSERT INTO tasks (title, due_date, completed)
    VALUES (${dto.title}, ${dto.dueDate}, false)
`;

// formData to dane z naszego formularza
// definicja akcji, ktora ma sie wykonac po stronie serwera w momencie zatwierdzenia formularza. Aby akcja zostala wykonana, ta funkcja musi byc przekazana do atrybutu `action` w danym formularzu
// Teraz jako pierwszy argument otrzymujemy poprzedni stan formularza, a jako drugi, formData
export const createTaskAction = async (prevState, formData) => {
    //  Tak nie zadziala <- funkcja redirect podnosi blad, ktory nastepnie jest obslugiwany przez next.js i dopiero nastepuje przekierowanie. W tym przypadku przechwytujemy ten "nextowy" blad w catch i dlatego przekierowanie nie wystepuje
    // try {
    //     await createTask({
    //         title: formData.get('title'),
    //         dueDate: formData.get('dueDate'),
    //     });

    //     redirect('/tasks');
    // } catch(err) {
    //     console.error(err);
    // }

    const title = formData.get('title');
    const dueDate = formData.get('dueDate');

    // await sleep(5_000, null)

    // Obiekt w ktorym beda informacje o bledach w konkretnych polach
    const errors = {};

    // Walidacja -> Mozemy zwrocic nowy stan formularza, w tym wypadku stan z informacja o bledach
    if (!title) {
        // Ustawiamy komunikat bledu dla konkretnego pola
        errors['title'] =  'Nazwa zadania nie moze byc pusta!';
    }
    if (!dueDate) {
        errors['dueDate'] =  'Termin wykonania zadania nie moze byc pusty!';
    }

    // Sprawdzamy czy obiekt errors ma wiecej pol niz 0 ( czy sa bledy ? )
    const hasErrors = Object.keys(errors).length > 0;

    // Jesli bledy, to zwroc nowy stan formularza z informacja o bledach
    if (hasErrors) return { errors }

    await createTask({
        title,
        dueDate,
        completed: false,
    });

    // przekieruj na strone /tasks
    redirect('/tasks');
};