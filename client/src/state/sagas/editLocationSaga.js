import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import config from '../../config';
import { EDIT_FORM_LOCATION, EDIT_LOCATION_SUCCESS } from '../types';

function editLocation(payload) {
  return axios.put(`${config.API_URL}/api/locations`, {
    ...payload,
  });
}

function* workerSaga(action) {
  try {
    const response = yield call(editLocation, action.payload);
    yield put({ type: EDIT_LOCATION_SUCCESS, payload: response.data });
  } catch (e) {
    console.log(e);
  }
}

export function* watcherEditSaga() {
  yield takeEvery(EDIT_FORM_LOCATION, workerSaga);
}
