import {compose, createStore, applyMiddleware} from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

const middleware = compose(applyMiddleware(thunk))

const store = createStore(reducer, middleware)

export default store
