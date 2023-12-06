import { H1 } from "@/app/components/H1";
import Link from "next/link";


export default function NotFound() {
    return (
        <div className="text-center">
            <H1>Tego zadania nie ma :(</H1>
            <p className="mt-10 text-xl">Nie udalo nam sie nazlexc tej strony :(</p>

            <Link href="/" className="inline-block mt-10 px-4 py-2 bg-indigo-500 text-white">Wroc do storny glownej</Link>
        </div>
    )
}