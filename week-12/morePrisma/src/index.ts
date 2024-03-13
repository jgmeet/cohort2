import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function insertUser(name:string, password:string, firstname:string) {
    const resp = await prisma.user.create({
        data: {name, password, firstname}
    })
    console.log(resp)
}

insertUser('usr@123', 'usr', 'usr123')