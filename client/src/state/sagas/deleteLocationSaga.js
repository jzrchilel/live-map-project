import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import config from '../../config';
import { DELETE_FORM_LOCATION, DELETE_LOCATION_SUCCESS } from '../types';

function deleteLocation(payload) {
  return axios.delete(`${config.API_URL}/api/locations`, {
    data: { _id: payload },
  });
}

function* workerSaga(action) {
  try {
    const response = yield call(deleteLocation, action.payload);
    yield put({ type: DELETE_LOCATION_SUCCESS, payload: response.data });
  } catch(e) {
    console.log(e);
  }
}

export function* watcherDeleteSaga() {
  yield takeEvery(DELETE_FORM_LOCATION, workerSaga);
}
