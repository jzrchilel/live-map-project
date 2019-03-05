import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import config from '../../config';
import {
  CREATE_LOCATION_SUCCESS,
  SEND_FORM_LOCATION,
} from '../types';

function createLocation(payload) {
  return axios.post(`${config.API_URL}/api/locations`, {
    ...payload,
  });
}

function* workerSaga(action) {
  try {
    const response = yield call(createLocation, action.payload);
    yield put({ type: CREATE_LOCATION_SUCCESS, payload: response.data });
  } catch (e) {
    console.log('error', e);
  }
}

export function* watchFormSaga() {
  yield takeEvery(SEND_FORM_LOCATION, workerSaga);
}
