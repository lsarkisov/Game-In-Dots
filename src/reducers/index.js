import { combineReducers } from 'redux';
import modes from './game-modes';
import userName from './user-name';

const reducers = combineReducers({
  modes,
  userName,
});

export default reducers;
