import React, { lazy, memo, Suspense } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Loader from '../Loader';

const DynamicRoute = (importPath) => {
  const Component = lazy(importPath);

  const DynamicComponent = (props) => (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );

  return memo(DynamicComponent);
};

export default DynamicRoute;
