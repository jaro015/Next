'use server'

// Funkcja modyfikujaca zadanie
const updateTask = (taskId, dto) => fetch(`http://localhost:3003/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dto)
})

export const updateTaskAction = async (taskId, prevState, formData) => {
    const title = formData.get('title');
    const dueDate = formData.get('dueDate');

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

    await updateTask(taskId, { title, dueDate })

    // Mozemy tez zwrocic informacje o sukcesie 
    return {
        success: 'Twoje zadanie zostalo zapisane'
    }
}