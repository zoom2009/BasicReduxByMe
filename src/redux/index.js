import {combineReducers} from 'redux'
import PersonReducer from './Person/PersonReducer';

export default combineReducers({
    person: PersonReducer
})