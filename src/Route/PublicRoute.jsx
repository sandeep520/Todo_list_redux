import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const PublicRoute = ({ component: Component, title, restricted, ...rest }) => {
  const isAuthenticated = useSelector((state) => state?.user?.id);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && restricted ? (
          <Redirect to="/todo-list" />
        ) : (
          <>
            <Helmet>
              <title>{title}</title>
            </Helmet>
            <Component {...props} />
          </>
        )
      }
    />
  );
};

PublicRoute.propTypes = {
  Component: PropTypes.func,
  title: PropTypes.string,
  restricted: PropTypes.bool,
  rest: PropTypes.object,
};

export default PublicRoute;
