import AsyncStorage from "@react-native-async-storage/async-storage";

export const checkUser = async () => {
    try {
        const user = await AsyncStorage.getItem("user")
        if(!!user) {
            return JSON.parse(user)
        }
        return user
    } catch (e) {
        console.log(e)
    }
}

export const setUser = async (data) => {
    try {
        await AsyncStorage.setItem("user", JSON.stringify(data))
    } catch (e) {
        console.log(e)
    }
}

export const removeUser = async () => {
    try {
        await AsyncStorage.removeItem("user")
    } catch (e) {
        console.log(e)
    }
}