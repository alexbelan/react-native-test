import {combineReducers} from 'redux'
import auth from './auth'
import data from './data'

const reducer = combineReducers({
	auth: auth,	
	data: data,
})

export default reducer
