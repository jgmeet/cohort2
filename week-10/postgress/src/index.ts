import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:mysecretpassword@localhost/postgres"
})

async function insertData() {
    await client.connect()
    try {
        const result = await client.query(`
            INSERT INTO users (username, email, password)
            VALUES ('usernam1', 'user1@example.com', 'user1pass')
        `)

        console.log("successfully added:", result)
    } catch(err) {
        console.error("Error!", err)
    } finally {
        await client.end()
    }
    
}

insertData();