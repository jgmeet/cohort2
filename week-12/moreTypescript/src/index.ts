import { string, z } from "zod"

interface User {
    id: number,
    name: string,
    age: number,
    email: string,
    password: string
}

// ** Pick
type toUpdateArguments = Pick<User, 'name'|'age'|'password'> 

// ** Partial -> make arguments optional
type toUpdateArgumentsOptional = Partial<toUpdateArguments>

// ** Records
interface Data {
    id: string,
    name: string,
    age: number
}

type data = Record<string, Data>

const user: data = {
    'usr@1': {id: 'usr@1', name: 'usr1', age: 21},
    'usr@2': {id: 'usr@2', name: 'usr2', age: 22}
}

// ** Maps -> key value pair
interface Datas {
    id: string,
    name: string,
    age: number
}

//                      {key, value}
const datasMap = new Map<string, Datas>() // or datasMap = new Map() for no typescript usage
datasMap.set('usr@1', {id: 'usr@1', name: 'usr1', age: 21})
datasMap.set('usr@2', {id: 'usr@2', name: 'usr2', age: 22})

const usr =  datasMap.get('usr@1')
console.log(usr);

// ***** Type inference in zod -> infer type from zod schema
// const userSchema = z.object({
//     name: z.string().min(1, {message: "Name cannot be empty" }),
//     email: z.string().email({ message: "Invalid email format" }),
//     age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
// })

// type userTpye = z.infer<typeof userSchema>

function updateUser(args: toUpdateArguments) {

}