import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './state/reducers';
import rootSaga from './state/sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware),
);

sagaMiddleware.run(rootSaga);
