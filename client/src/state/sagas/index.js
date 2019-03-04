
import { all } from 'redux-saga/effects';
import { watchCitiesSaga } from './citiesSaga';

export default function* () {
  yield all([
    watchCitiesSaga()
  ])
}
