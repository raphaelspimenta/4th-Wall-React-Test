import { reduce } from 'lodash';

import {
  types as contactsTypes,
  namespace as contactsNamespace,
} from '../reducers/contacts/actions';
import {
  types as locationsTypes,
  namespace as locationsNamespace,
} from '../reducers/locations/actions';

const getTypes = (namespace, type) => {
  const keys = [
    `${type}`,
    `${type}_PENDING`,
    `${type}_SUCCESS`,
    `${type}_ERROR`,
    `RESET_${type}_STATUS`,
  ];

  return reduce(
    keys,
    (result, key) => ({ ...result, [key]: `${namespace}/${key}` }),
    {}
  );
};

describe('Action types', () => {
  it('should return action types for locations', () => {
    const expectedTypes = {
      ...getTypes(locationsNamespace, 'LOAD'),
    };
    expect(locationsTypes).toEqual(expectedTypes);
  });
  it('should return action types for contacts', () => {
    const expectedTypes = {
      ...getTypes(contactsNamespace, 'LOAD'),
      ...getTypes(contactsNamespace, 'CREATE'),
      ...getTypes(contactsNamespace, 'UPDATE'),
      ...getTypes(contactsNamespace, 'DELETE'),
    };
    expect(contactsTypes).toEqual(expectedTypes);
  });
});
