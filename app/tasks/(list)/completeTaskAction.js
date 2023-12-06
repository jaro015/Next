'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { sql } from '@vercel/postgres';

const completeTask = taskId => sql`
    UPDATE tasks
    SET completed = true
    WHERE id = ${taskId}
`;

// akcja serwerowa, ktora ma ukonczyc zadanie 
export const completeTaskAction = async formData => {
    await completeTask(formData.get('taskId'));

    // Mowimy nextowi, ze strona /tasks jest juz nie aktualna, wiec ja aktualizuje
    revalidatePath('/tasks');
    // Tez zadziala, ale to jest pelne przekierowanie
    // redirect('/tasks');
}