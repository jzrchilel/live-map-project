
import { all } from 'redux-saga/effects';
import { watchHelloSaga } from './helloSaga';

export default function* () {
  yield all([
    watchHelloSaga()
  ])
}
