import { all } from 'redux-saga/effects';

import contactsSaga from './contacts';
import locationsSaga from './locations';

export default function* rootSaga() {
  yield all([...locationsSaga, ...contactsSaga]);
}
