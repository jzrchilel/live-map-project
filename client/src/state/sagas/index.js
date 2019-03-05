
import { all, fork } from 'redux-saga/effects';
import { watchCitiesSaga } from './citiesSaga';
import { watchFormSaga } from './formSaga';
import { watcherEditSaga } from './editLocationSaga';
import { watcherDeleteSaga } from './deleteLocationSaga';

export default function* rootSaga() {
  yield all([
    fork(watchCitiesSaga),
    fork(watchFormSaga),
    fork(watcherEditSaga),
    fork(watcherDeleteSaga),
  ]);
}
