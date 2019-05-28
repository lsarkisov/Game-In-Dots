import {
  GET_SETTINGS_START,
  GET_SETTINGS_SUCCESS,
  GET_SETTINGS_ERROR,
} from '../../const';

const settings = (state = {}, action) => {
  switch (action.type) {
    case GET_SETTINGS_START:
      return {
        ...state,
        startSettingsLoading: true,
        settings: null,
      };
    case GET_SETTINGS_SUCCESS:
      return {
        ...state,
        startSettingsLoading: false,
        settings: action.payload,
      };
    case GET_SETTINGS_ERROR:
      return {
        ...state,
        startSettingsLoading: false,
        settings: null,
      };
    default:
      return state;
  }
};

export default settings;
