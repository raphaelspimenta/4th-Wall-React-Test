export const simulateSlowApiCall = (promise) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => promise.then(resolve).catch(reject), 2000);
  });
};
