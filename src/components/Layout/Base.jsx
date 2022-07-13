import Header from './Header';

import './layout.scss';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="layout-container">{children}</div>
    </>
  );
};

export default BaseLayout;
