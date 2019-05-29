import {
  GET_GAME_MODES_START,
  GET_GAME_MODES_SUCCESS,
  GET_GAME_MODES_ERROR,
  ON_GAME_MODE_SELECT,
} from '../../const';

export const startGetGameModesAction = () => ({
  type: GET_GAME_MODES_START,
});

export const successGetGameModesAction = payload => ({
  type: GET_GAME_MODES_SUCCESS,
  payload,
});

export const errorGetGameModesAction = error => ({
  type: GET_GAME_MODES_ERROR,
  error,
});

export const onGameModeSelectAction = payload => ({
  type: ON_GAME_MODE_SELECT,
  payload,
});
