import { createStore, combineReducers } from 'redux';
import mealsReducer from '../store/reducers/meals';

const rootReducer = combineReducers({
   meals: mealsReducer
});

export default createStore(rootReducer);