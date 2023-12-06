const { db } = require("@vercel/postgres");

async function main() {
    // Polacz z baza danych
    const client = await db.connect();

    // Wlaczamy opcje generowani uuid
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Definicja tabeli tasks
    await client.sql`
        CREATE TABLE IF NOT EXISTS tasks (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            due_date DATE NOT NULL,
            completed BOOLEAN
        )
    `;

    // Rozlacz sie z baza danych
    await client.end();
}

main();