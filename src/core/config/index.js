export const environments = {
  production: {
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3004/',
  },
  development: {
    apiUrl: process.env.REACT_APP_API_URL || 'http://localhost:3004/',
  },
};

export const getCurrentEnvConfig = () =>
  environments[process.env.NODE_ENV] || environments.development;
