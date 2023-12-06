'use client'

import { useFormState, useFormStatus } from 'react-dom';

const SubmitButton = () => {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} className="bg-indigo-600 text-white text-lg px-4 py-2 disabled:opacity-60">
            {pending ? 'Dodajemy Twoje zadanie ...' : 'Dodaj zadanie'}
        </button>
    );
}

const FormFields = ({ state, task }) => {
    const { pending } = useFormStatus();

    return (
        <>
            <label htmlFor="title" className="block mb-2">Co trzeba zrobic?</label>
            <input
                id="title"
                type="text"
                name="title"
                disabled={pending}
                className={`border p-3 w-full ${state?.errors?.title && !pending ? 'error' : 'border-gray-400'}`}
                placeholder="Co trzeba zrobic?"
                // Ustawienie wartosci poczatkowej ( potrzebny optional chaining, zeby create dalej dzialal )
                defaultValue={task?.title}
            />
            {state?.errors?.title && !pending && (
                <p className="text-red-500 mt-2">
                    {state.errors.title}
                </p>
            )}

            <label htmlFor="dueDate" className="block mt-6 mb-2">Do kiedy trzeba zrobic?</label>
            <input
                id="dueDate"
                type="date"
                name="dueDate"
                disabled={pending}
                className={`border p-3 w-full ${state?.errors?.dueDate && !pending ? 'border-red-500' : 'border-gray-400'}`}
                placeholder="Do kiedy trzeba zrobic?"
                // Ustawienie wartosci poczatkowej ( potrzebny optional chaining, zeby create dalej dzialal )
                defaultValue={task?.dueDate}
            />
            {state?.errors?.dueDate && !pending && (
                <p className="text-red-500 mt-2">
                    {state.errors.dueDate}
                </p>
            )}

            <div className="text-center mt-6">
                <SubmitButton />
            </div>
        </>
    );
}

export const TaskForm = ({ action, task }) => {
    const [state, formAction] = useFormState(action);

    return (
        <form action={formAction} className="px-6 mt-10 relative">
            {state?.success && <p className="text-green-500 my-3 text-center">{state.success}</p>}

            <FormFields state={state} task={task} />
        </form>
    );
}