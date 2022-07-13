export const namespace = 'LOCATIONS';

const createTypesForOperation = (operation) => ({
  [operation.toUpperCase()]: `${namespace}/${operation.toUpperCase()}`,
  [`${operation.toUpperCase()}_PENDING`]: `${namespace}/${operation.toUpperCase()}_PENDING`,
  [`${operation.toUpperCase()}_ERROR`]: `${namespace}/${operation.toUpperCase()}_ERROR`,
  [`${operation.toUpperCase()}_SUCCESS`]: `${namespace}/${operation.toUpperCase()}_SUCCESS`,
  [`RESET_${operation.toUpperCase()}_STATUS`]: `${namespace}/RESET_${operation.toUpperCase()}_STATUS`,
});

export const types = {
  ...createTypesForOperation('load'),
};

export const actions = {
  load: (params) => ({ type: types.LOAD, params }),
  setLoadPending: () => ({ type: types.LOAD_PENDING }),
  setLoadSuccess: (data) => ({ type: types.LOAD_SUCCESS, data }),
  setLoadError: (error) => ({ type: types.LOAD_ERROR, error }),
  resetLoadStatus: () => ({ type: types.RESET_LOAD_STATUS }),
};
