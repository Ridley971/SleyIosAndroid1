import {createStore} from 'redux'
import profileReducer from '../Reducers/profileReducer'

const store = createStore(profileReducer);

export default store
