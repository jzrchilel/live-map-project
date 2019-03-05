import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import config from '../../config';
import {
  FETCH_CITIES_PENDING,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_ERROR,
  GET_CITIES,
} from '../types';

function fetchCities() {
  return axios.get(`${config.API_URL}/api/locations`);
}

function* workerSaga() {
  try {
    yield put({ type: FETCH_CITIES_PENDING });
    const response = yield call(fetchCities);
    yield put({ type: FETCH_CITIES_SUCCESS, payload: response.data });
  } catch(e) {
    console.log(e);
    yield put({ type: FETCH_CITIES_ERROR, payload: e.response });
  }
}

export function* watchCitiesSaga() {
  yield takeEvery(GET_CITIES, workerSaga);
}
