// combin reducers

import {combineReducers} from 'redux';
import todos from './Todo';

const reducers = combineReducers({
  todos,
});

export default reducers;