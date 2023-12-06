'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const completeTask = taskId => fetch(`http://localhost:3003/tasks/${taskId}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        completed: true
    })
})

// akcja serwerowa, ktora ma ukonczyc zadanie 
export const completeTaskAction = async formData => {
    await completeTask(formData.get('taskId'));

    // Mowimy nextowi, ze strona /tasks jest juz nie aktualna, wiec ja aktualizuje
    revalidatePath('/tasks');
    // Tez zadziala, ale to jest pelne przekierowanie
    // redirect('/tasks');
}