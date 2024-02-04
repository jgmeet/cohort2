import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";

const todos = [{
    id: 1,
    title: "title1",
    description: "description1"
},{ 
    id: 2,
    title: "title2",
    description: "description2"
}]

export const todoAtoms = atomFamily({
    key: "todoAtoms",
    default: selectorFamily({
        key: "default",
        get: (id) => async () => {
                await new Promise(r => setTimeout(r, 5000))
                const res = await axios.get("https://sum-server.100xdevs.com/todo?id="+id192109)
                return res.data.todo
            }
    })
    // default: function (id) {
    //     return todos.find( function (x) {
    //         return x.id == id;
    //     })
    // }
})