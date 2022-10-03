import { LOGOUT } from "../actions/auth"
import { GET_DATA_LOADING, GET_POSTS, GET_USERS } from "../actions/data"

const INITIAL_STORE = {
	users: [],
    posts: [],
    loadingData: false,
}

const data = (store = JSON.parse(JSON.stringify(INITIAL_STORE)), action) => {
	switch (action.type) {
		case GET_USERS:
			return {...store, users: [...action.payload]}
        case GET_POSTS:
            return {...store, posts: [...action.payload]}
        case GET_DATA_LOADING:
            return {...store, loadingData: action.payload}    
		case LOGOUT:
			return {...INITIAL_STORE}
		default:
			return store
	}
}

export default data
