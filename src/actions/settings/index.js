import {
  GET_SETTINGS_START,
  GET_SETTINGS_SUCCESS,
  GET_SETTINGS_ERROR,
} from '../../const';

export const startGetSettingsAction = () => ({
  type: GET_SETTINGS_START,
});

export const successGetSettingsAction = payload => ({
  type: GET_SETTINGS_SUCCESS,
  payload,
});

export const errorGetSettingsAction = error => ({
  type: GET_SETTINGS_ERROR,
  error,
});
