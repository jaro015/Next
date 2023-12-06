'use client'

import { H1 } from "@/app/components/H1"

export default function Error({
    error
}) {
    return (
        <>
            <H1>Formularz zamkniety</H1>

            <p className="text-center mt-6">
                {error.message}
            </p>
        </>
    )
}