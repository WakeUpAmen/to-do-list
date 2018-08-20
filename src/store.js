import {createStore} from 'redux';
import reducers from './reducers';

// create store
const store = createStore(reducers);

export default store;