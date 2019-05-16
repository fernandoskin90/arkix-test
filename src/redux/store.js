import { createStore } from 'redux';
import filterReducer from './reducers';

const store = createStore(filterReducer);

export default store;
