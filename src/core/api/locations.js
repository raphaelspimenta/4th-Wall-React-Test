import createAPI from '.';
import { getCurrentEnvConfig } from '../config';
import { simulateSlowApiCall } from './utils';

const { apiUrl } = getCurrentEnvConfig();
const BaseAPI = createAPI(apiUrl);

export const getLocations = () => simulateSlowApiCall(BaseAPI.get('locations'));
