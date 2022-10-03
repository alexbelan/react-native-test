import { GET_USER, GET_USER_LOADING, LOGOUT } from "../actions/auth"

const INITIAL_STORE = {
	user: null,
	loadingUser: false,
}

const auth = (store = JSON.parse(JSON.stringify(INITIAL_STORE)), action) => {
	switch (action.type) {
		case GET_USER:
			return {...store, user: action.payload}
		case GET_USER_LOADING:
			return {...store, loadingUser: action.payload}	
		case LOGOUT:
			return {...INITIAL_STORE}
		default:
			return store
	}
}

export default auth
