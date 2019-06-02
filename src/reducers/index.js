import { combineReducers } from 'redux';
import modes from './game-modes';
import userName from './user-name';
import leadersBoard from './leader-board';
import gamePlay from './game-play';

const reducers = combineReducers({
  modes,
  userName,
  leadersBoard,
  gamePlay,
});

export default reducers;
