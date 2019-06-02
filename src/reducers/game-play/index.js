import {
  ON_GAME_START,
  ON_GAME_STOP,
} from '../../const';

const gamePlay = (state = {}, action) => {
  switch (action.type) {
    case ON_GAME_START:
      return {
        ...state,
        play: true,
      };
    case ON_GAME_STOP:
      return {
        ...state,
        play: false,
      };
    default:
      return state;
  }
};

export default gamePlay;
