import { combineReducers } from 'redux';
import modes from './game-modes';
import userName from './user-name';
import leadersBoard from './leader-board';

const reducers = combineReducers({
  modes,
  userName,
  leadersBoard,
});

export default reducers;
