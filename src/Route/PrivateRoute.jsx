import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";

const PrivateRoute = ({ component: Component,title, ...rest }) => {
  
  const isAuthenticated = useSelector(state => state?.user?.id);

  return (
    
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <Component {...props} />
          </>
        ) : (
          <Redirect to="/sign-up" />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
    Component: PropTypes.func,
    title: PropTypes.string,
    rest: PropTypes.object,
  };
  

export default PrivateRoute;
