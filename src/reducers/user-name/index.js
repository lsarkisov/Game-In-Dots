import { SET_USER_NAME } from '../../const';

const userName = (state = {}, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        name: action.payload.name,
      };
    default:
      return state;
  }
};

export default userName;
