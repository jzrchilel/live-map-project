import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import config from '../../config';
import {
  EDIT_FORM_LOCATION,
  EDIT_LOCATION_PENDING,
  EDIT_LOCATION_SUCCESS,
  EDIT_LOCATION_ERROR,
} from '../types';

function editLocation(payload) {
  return axios.put(`${config.API_URL}/api/locations`, {
    ...payload,
  });
}

function* workerSaga(action) {
  try {
    yield put({ type: EDIT_LOCATION_PENDING });
    const response = yield call(editLocation, action.payload);
    yield put({ type: EDIT_LOCATION_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: EDIT_LOCATION_ERROR, payload: e.response})
  }
}

export function* watcherEditSaga() {
  yield takeEvery(EDIT_FORM_LOCATION, workerSaga);
}
