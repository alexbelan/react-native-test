import axios from 'axios'

export const getPostsApi = (userId) => {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
}