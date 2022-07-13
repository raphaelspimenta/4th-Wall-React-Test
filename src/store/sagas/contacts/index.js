import { call, put, takeLatest } from 'redux-saga/effects';

import {
  getContacts,
  saveContact,
  updateContact as updateContactApi,
  deleteContact,
} from '../../../core/api/contacts';
import { actions, types } from '../../reducers/contacts/actions';

export function* loadContacts() {
  const { setLoadPending, setLoadError, setLoadSuccess } = actions;

  try {
    yield put(setLoadPending());
    const data = yield call(getContacts);
    yield put(setLoadSuccess(data));
  } catch (error) {
    yield put(setLoadError(error));
  }
}

export function* createContact(action) {
  const { data } = action;
  const { setCreatePending, setCreateError, setCreateSuccess } = actions;

  try {
    yield put(setCreatePending());
    const response = yield call(saveContact, data);
    yield put(setCreateSuccess(response));
    yield put(actions.load());
  } catch (error) {
    yield put(setCreateError(error));
  }
}

export function* updateContact(action) {
  const { data } = action;
  const { setUpdatePending, setUpdateError, setUpdateSuccess } = actions;

  try {
    yield put(setUpdatePending());
    const response = yield call(updateContactApi, data);
    yield put(setUpdateSuccess(response));
    yield put(actions.load());
  } catch (error) {
    yield put(setUpdateError(error));
  }
}

export function* removeContact(action) {
  const { data } = action;
  const { setDeletePending, setDeleteError, setDeleteSuccess } = actions;

  try {
    yield put(setDeletePending());
    yield call(deleteContact, data);
    yield put(setDeleteSuccess());
    yield put(actions.load());
  } catch (error) {
    yield put(setDeleteError(error));
  }
}

export const contactsSaga = [
  takeLatest(types.LOAD, loadContacts),
  takeLatest(types.CREATE, createContact),
  takeLatest(types.UPDATE, updateContact),
  takeLatest(types.DELETE, removeContact),
];

export default contactsSaga;
