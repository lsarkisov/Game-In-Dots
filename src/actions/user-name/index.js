import { SET_USER_NAME } from '../../const';

const setUserNameAction = payload => ({
  type: SET_USER_NAME,
  payload,
});

export default setUserNameAction;
