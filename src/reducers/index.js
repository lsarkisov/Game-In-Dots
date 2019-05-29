import { combineReducers } from 'redux';
import modes from './game-modes';

const reducers = combineReducers({
  modes,
});

export default reducers;
