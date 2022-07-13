export const namespace = 'CONTACTS';

const createTypesForOperation = (operation) => ({
  [operation.toUpperCase()]: `${namespace}/${operation.toUpperCase()}`,
  [`${operation.toUpperCase()}_PENDING`]: `${namespace}/${operation.toUpperCase()}_PENDING`,
  [`${operation.toUpperCase()}_ERROR`]: `${namespace}/${operation.toUpperCase()}_ERROR`,
  [`${operation.toUpperCase()}_SUCCESS`]: `${namespace}/${operation.toUpperCase()}_SUCCESS`,
  [`RESET_${operation.toUpperCase()}_STATUS`]: `${namespace}/RESET_${operation.toUpperCase()}_STATUS`,
});

export const types = {
  ...createTypesForOperation('load'),
  ...createTypesForOperation('create'),
  ...createTypesForOperation('update'),
  ...createTypesForOperation('delete'),
};

export const actions = {
  load: (params) => ({ type: types.LOAD, params }),
  setLoadPending: () => ({ type: types.LOAD_PENDING }),
  setLoadSuccess: (data) => ({ type: types.LOAD_SUCCESS, data }),
  setLoadError: (error) => ({ type: types.LOAD_ERROR, error }),
  resetLoadStatus: () => ({ type: types.RESET_LOAD_STATUS }),

  create: (data) => ({ type: types.CREATE, data }),
  setCreatePending: () => ({ type: types.CREATE_PENDING }),
  setCreateSuccess: (data) => ({ type: types.CREATE_SUCCESS, data }),
  setCreateError: (error) => ({ type: types.CREATE_ERROR, error }),
  resetCreateStatus: () => ({ type: types.RESET_CREATE_STATUS }),

  update: (data) => ({ type: types.UPDATE, data }),
  setUpdatePending: () => ({ type: types.UPDATE_PENDING }),
  setUpdateSuccess: () => ({ type: types.UPDATE_SUCCESS }),
  setUpdateError: (error) => ({ type: types.UPDATE_ERROR, error }),
  resetUpdateStatus: () => ({ type: types.RESET_UPDATE_STATUS }),

  delete: (data) => ({ type: types.DELETE, data }),
  setDeletePending: () => ({ type: types.DELETE_PENDING }),
  setDeleteSuccess: () => ({ type: types.DELETE_SUCCESS }),
  setDeleteError: (error) => ({ type: types.DELETE_ERROR, error }),
  resetDeleteStatus: () => ({ type: types.RESET_DELETE_STATUS }),
};
