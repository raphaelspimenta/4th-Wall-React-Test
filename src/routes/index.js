import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DynamicRoute from '../components/DynamicRoute';
import BaseLayout from '../components/Layout/Base';

const Contacts = DynamicRoute(() =>
  import('../pages/Contacts' /* webpackChunkName: 'contacts' */)
);

function routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <BaseLayout>
              <Contacts />
            </BaseLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default routes;
