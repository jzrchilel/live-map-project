import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';

function fetchCities() {
  return axios.get('/cities.json')
}

export function* watchHelloSaga() {
  yield takeEvery('HELLO_SAGA', workerSaga);
}

function* workerSaga() {
  try {
    const response = yield call(fetchCities);
    yield put({ type: 'FETCH_CITIES_SUCCESS', payload: response.data });
  } catch(e) {
    console.log(e);
  }
}
