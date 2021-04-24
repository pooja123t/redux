import {createStore} from 'redux';
import CountReducer from '../reducers/countreducers';
const store=createStore(CountReducer);
export default store;