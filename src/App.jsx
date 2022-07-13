import React, { Suspense } from 'react';

import Loader from './components/Loader';
import Routes from './routes';

import './App.scss';

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes />
    </Suspense>
  );
}

export default App;
