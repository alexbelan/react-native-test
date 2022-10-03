import { checkUser, setUser } from "./localStrong"

export const getUser = () => {
    return checkUser()
}

export const addUser = (data) => {
    // console.log(data)
    if(data.login === "VovaPupkin" && data.password === "12345") {
        const userData = {
            name: "Vova",
            surname: "Pupkin"
        }
        setUser(userData)
        return userData
    }
    return false
}

