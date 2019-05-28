import {
  put, call, takeEvery, all,
} from 'redux-saga/effects';
import * as types from '../../const';
import * as services from '../../services/api';

function* getSettings() {
  const payload = yield call(() => services.getGameSettings());
  yield put({ type: types.GET_SETTINGS_SUCCESS, payload });
}

function* startToGetAllFiles() {
  yield takeEvery(
    types.GET_SETTINGS_START, getSettings,
  );
}

export default function* rootSaga() {
  yield all([
    startToGetAllFiles(),
  ]);
}
