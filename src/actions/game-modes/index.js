import {
  GET_GAME_MODES_START,
  GET_GAME_MODES_SUCCESS,
  GET_GAME_MODES_ERROR,
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
