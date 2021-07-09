import {createStore, applyMiddleware, combineReducers} from 'redux';
import articleReducer from './articles/articleReducer'
import thunk from 'redux-thunk'
//le middleware thunk permet de faire des appels asynchrome

const rootReducer = combineReducers({
    articleReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store;
