import { createReducer } from '../utils';

describe('Store utils', () => {
  it('should create a reducer correclty', () => {
    const initialState = { test: 'test' };
    const handlers = {
      test: (state) => ({ ...state, test: 'test2' }),
    };
    const reducer = createReducer(initialState, handlers);
    expect(reducer(initialState, { type: 'test' })).toEqual({ test: 'test2' });
  });
});
