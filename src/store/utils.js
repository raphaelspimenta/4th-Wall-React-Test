import { useSelector } from 'react-redux';

export const createReducer =
  (initialState, handlers) =>
  (state = initialState, action) =>
    handlers[action.type] ? handlers[action.type](state, action) : state;

export const useResource = (resourceName) =>
  useSelector((state) => state[resourceName]);
