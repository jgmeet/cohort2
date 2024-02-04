import { atom, selector } from "recoil";
import axios from "axios"

export const topBar = atom({
    key: "topBar",
    default: selector({
        key: "default",
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data
        }
    })
    // {
    //     network: 134,
    //     notifications: 10,
    //     jobs: 107,
    //     messages: 53
    // }
})

export const finalCount = selector({
    key: "finalCount",
    get: ({get})=>{
        const topBa = get(topBar)
        // const networkCount = topBa.network
        // const notificationsCount = topBa.notifications
        // const jobsCount = topBa.jobs
        // const messagesCount = topBa.messages

        return topBa.network+topBa.notifications+topBa.jobs+topBa.messages;
    }
})