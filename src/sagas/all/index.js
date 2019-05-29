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

export default function* rootSaga() {
  yield all([
    startToGetAllFiles(),
  ]);
}
