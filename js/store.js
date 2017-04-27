import { createStore } from 'redux'
import rootReducer from './reducers'

const store = create Store(rootReducer)

export default store
