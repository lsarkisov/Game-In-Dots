import {
  GET_LEADERS_START,
  GET_LEADERS_SUCCESS,
  GET_LEADERS_ERROR,
} from '../../const';

export const startGetLeadersAction = () => ({
  type: GET_LEADERS_START,
});

export const successGetLeadersAction = payload => ({
  type: GET_LEADERS_SUCCESS,
  payload,
});

export const errorGetLeadersAction = error => ({
  type: GET_LEADERS_ERROR,
  error,
});
