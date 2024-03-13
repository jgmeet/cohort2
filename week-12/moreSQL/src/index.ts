import { Client } from "pg"

const client = new Client({
    connectionString: "postgresql://postgres:mysecretpassword@localhost:5432/postgres?sslmode=disable"
})

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

async function insertUser(name:string, email:string, password:string) {
    await client.connect()
    await client.query(`
        Insert into users (username, email, password)
        VALUES ('${name}', '${email}', '${password}');
    `)

    console.log('User creates successfully')
}

// createUsersTable();
insertUser('username_here', 'user@example.com', 'user_password')