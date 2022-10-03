import { getPostsApi } from "../../api/posts"
import { getUsersApi } from "../../api/users"
import { GET_DATA_LOADING, GET_POSTS, GET_USERS } from "../actions/data"

const loadingData = (loading) => {
    return {
        type: GET_DATA_LOADING,
        payload: loading,
    }
}

export const getUsers = () => {
    return async dispatch => {
        try {
            const res = await getUsersApi()
            dispatch({
                type: GET_USERS,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getPosts = () => {
    return async (dispatch, getState) => {
        try {
            dispatch(loadingData(true))
            const users = getState().data.users
            const newArr = []
            for(let i = 0; i < users.length; ++i) {
                const userPosts = await getPostsApi(users[i].id)
                newArr.push(userPosts.data[0])
                
            }
            dispatch({
                type: GET_POSTS,
                payload: [...newArr]
            })
            dispatch(loadingData(false))
        } catch (error) {
            dispatch(loadingData(false))
        }
    }
}