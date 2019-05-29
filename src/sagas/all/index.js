import {
  put, call, takeEvery, all,
} from 'redux-saga/effects';
import * as types from '../../const';
import * as services from '../../services/api';

function* getGameModes() {
  const payload = yield call(() => services.getGameModes());
  yield put({ type: types.GET_GAME_MODES_SUCCESS, payload });
}

function* startToGetAllFiles() {
  yield takeEvery(
    types.GET_GAME_MODES_START, getGameModes,
  );
}

function* getLeaders() {
  const payload = yield call(() => services.getLeaders());
  yield put({ type: types.GET_LEADERS_SUCCESS, payload });
}

function* startToGetLeaders() {
  yield takeEvery(
    types.GET_LEADERS_START, getLeaders,
  );
}

export default function* rootSaga() {
  yield all([
    startToGetAllFiles(),
    startToGetLeaders(),
  ]);
}
