import {
  GET_GAME_MODES_START,
  GET_GAME_MODES_SUCCESS,
  GET_GAME_MODES_ERROR,
  ON_GAME_MODE_SELECT,
} from '../../const';

const modes = (state = {}, action) => {
  switch (action.type) {
    case GET_GAME_MODES_START:
      return {
        ...state,
        startModesLoading: true,
        modes: null,
      };
    case GET_GAME_MODES_SUCCESS:
      return {
        ...state,
        startModesLoading: false,
        modes: action.payload,
      };
    case GET_GAME_MODES_ERROR:
      return {
        ...state,
        startModesLoading: false,
        modes: null,
      };
    case ON_GAME_MODE_SELECT:
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
};

export default modes;
