import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

// above is same as import mongoose from 'mongoose'
// mongoose.connect()

/*******  Insertion ******/
// async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//     const User = await prisma.user.create({
//         data: {
//           // ... data to create a User
//           username, password, firstName, lastName
//         },
//         select: { //  what data to return back
//             id: true,
//             username: true
//         }
//     })
//     console.log(User)
// }

// insertUser('user1','1mypass','fname1','1lname')

interface UpdateParams {
    username: string,
    firstName: string,
    lastName: string
}

async function updateUser(props: UpdateParams) {
    const upd = await prisma.user.update({
        where: {
            username: props.username
        }, 
        data: {
            firstName: props.firstName,
            lastName: props.lastName
        }
    })
    console.log(upd)
}

updateUser({ username: 'user1', firstName: 'fname', lastName: 'lname'})