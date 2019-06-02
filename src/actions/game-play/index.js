import {
  ON_GAME_START,
  ON_GAME_STOP,
} from '../../const';

export const onGameStartAction = () => ({
  type: ON_GAME_START,
});

export const onGameStopAction = () => ({
  type: ON_GAME_STOP,
});
