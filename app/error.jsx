'use client'

import { H1 } from "./components/H1";

export default function Error({
    error
}) {
    return (
        <>
            <H1>Oops, cos poszlo nie tak :(</H1>

            <p className="text-center mt-6">
                {error.message}
            </p>
        </>
    )
}