import { addUser, getUser } from "../../api/auth"
import { checkUser, removeUser } from "../../api/localStrong"
import { GET_USER, GET_USER_LOADING, LOGOUT } from "../actions/auth"

const loadingUser = (loading) => {
	return {
		type: GET_USER_LOADING,
		payload: loading
	}
}

export const logout = () => {
	return dispatch => {
		removeUser()
		dispatch({
			type: LOGOUT,
		})
	}
}

export const login = (data) => {
	return async dispatch => {
		try {
			const user = addUser(data)
			if(!!user) {
				dispatch({
					type: GET_USER,
					payload: user,
				})
			} else {
				alert("incorrect login and password")
			}
			
		} catch (e) {
			console.log(e)
		}
	}
}

export const check = () => {
	return async dispatch => {
		try {
			dispatch(loadingUser(true))
			const dataUser = await getUser()
			if(!!dataUser) {
				dispatch({
					type: GET_USER,
					payload: dataUser
				})
			}
			dispatch(loadingUser(false))
		} catch (e) {
			console.log(e)
			dispatch(loadingUser(false))
		}
	}
}