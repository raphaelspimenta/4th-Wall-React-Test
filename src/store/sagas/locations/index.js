import { call, put, takeLatest } from 'redux-saga/effects';

import { getLocations } from '../../../core/api/locations';
import { actions, types } from '../../reducers/locations/actions';

export function* loadLocations() {
  const { setLoadPending, setLoadError, setLoadSuccess } = actions;

  try {
    yield put(setLoadPending());
    const data = yield call(getLocations);
    yield put(setLoadSuccess(data));
  } catch (error) {
    yield put(setLoadError(error));
  }
}

export const locationsSaga = [takeLatest(types.LOAD, loadLocations)];

export default locationsSaga;
