import { Status } from '../../types';
import { createReducer } from '../../utils';
import { types } from './actions';

const initialState = {
  data: null,
  load: {
    status: Status.pristine,
    error: null,
  },
  create: {
    status: Status.pristine,
    error: null,
  },
  update: {
    status: Status.pristine,
    error: null,
  },
  delete: {
    status: Status.pristine,
    error: null,
  },
};

const createActionsForOperation = (operation) => ({
  [types[`${operation.toUpperCase()}_PENDING`]]: (state) => ({
    ...state,
    [operation]: { status: Status.pending, error: null },
  }),
  [types[`${operation.toUpperCase()}_ERROR`]]: (state, { error }) => ({
    ...state,
    [operation]: { status: Status.error, error },
  }),
  [types[`${operation.toUpperCase()}_SUCCESS`]]: (state, { data }) => ({
    ...state,
    data,
    [operation]: { status: Status.success, error: null },
  }),
  [types[`RESET_${operation.toUpperCase()}_STATUS`]]: (state) => ({
    ...state,
    [operation]: { status: Status.pristine, error: null },
  }),
});

const actions = {
  ...createActionsForOperation('load'),
  ...createActionsForOperation('create'),
  ...createActionsForOperation('update'),
  ...createActionsForOperation('delete'),
};

export default createReducer(initialState, actions);
