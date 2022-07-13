import {
  actions as contactsActions,
  namespace as contactsNamespace,
} from '../reducers/contacts/actions';
import {
  actions as locationsActions,
  namespace as locationsNamespace,
} from '../reducers/locations/actions';

export const testActionCreators = (actionCreators, namespace, type) => {
  const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1);
  const upperName = namespace.toUpperCase();
  const upperType = type.toUpperCase();
  const isParams = ['login', 'load', 'send', 'request'];

  // basic action
  let actionObject = actionCreators[type]({ test: 'test' });
  const key = isParams.includes(type) ? 'params' : 'data';
  let expected = { type: `${upperName}/${upperType}`, [key]: { test: 'test' } };
  expect(actionObject).toEqual(expected);

  // pending
  const pending = `set${capitalizedType}Pending`;
  actionObject = actionCreators[pending]();
  expected = { type: `${upperName}/${upperType}_PENDING` };
  expect(actionObject).toEqual(expected);

  // success
  const success = `set${capitalizedType}Success`;
  actionObject = actionCreators[success]();
  expected = { type: `${upperName}/${upperType}_SUCCESS` };
  expect(actionObject).toEqual(expected);

  // error
  const error = `set${capitalizedType}Error`;
  actionObject = actionCreators[error]('invalid-field');
  expected = {
    type: `${upperName}/${upperType}_ERROR`,
    error: 'invalid-field',
  };
  expect(actionObject).toEqual(expected);

  // reset
  const reset = `reset${capitalizedType}Status`;
  actionObject = actionCreators[reset]();
  expected = { type: `${upperName}/RESET_${upperType}_STATUS` };
  expect(actionObject).toEqual(expected);
};

describe('Store Actions', () => {
  it('should return action creators for locations', () => {
    testActionCreators(locationsActions, locationsNamespace, 'load');
  });
  it('should return action creators for contacts', () => {
    testActionCreators(contactsActions, contactsNamespace, 'load');
    testActionCreators(contactsActions, contactsNamespace, 'create');
    testActionCreators(contactsActions, contactsNamespace, 'update');
    testActionCreators(contactsActions, contactsNamespace, 'delete');
  });
});
