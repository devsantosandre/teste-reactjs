import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
  layout: React.ComponentType<any>;
  component: React.ComponentType<any>;
  // eslint-disable-next-line react/require-default-props
  isAuth?: boolean;
}

const RouteLayout = (props: Props): JSX.Element => {
  const token: string | null = localStorage.getItem('gov_access_token_siseci');
  const {
    layout: Layout, component: Component, path, isAuth,
  } = props;
  if (isAuth && !token) {
    return <Redirect to="/" />;
  }
  return (
    <Route
      path={path}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteLayout;
