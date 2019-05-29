import {
  GET_LEADERS_START,
  GET_LEADERS_SUCCESS,
  GET_LEADERS_ERROR,
} from '../../const';

const leadersBoard = (state = {}, action) => {
  switch (action.type) {
    case GET_LEADERS_START:
      return {
        ...state,
        startLoadingLeaders: true,
        leaders: null,
      };
    case GET_LEADERS_SUCCESS:
      return {
        ...state,
        startLoadingLeaders: false,
        leaders: action.payload,
      };
    case GET_LEADERS_ERROR:
      return {
        ...state,
        startLoadingLeaders: false,
        leaders: null,
      };
    default:
      return state;
  }
};

export default leadersBoard;
