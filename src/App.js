import React, { Suspense, useEffect, useMemo } from "react";
import Route from "./Route/Route";
import Layout from "./hoc/Layout";
import { authCheckHandler } from "./Store/actions";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckHandler());
  }, []);

  const renderModel = useMemo(() => {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div class="spinner-grow" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    );
  }, []);

  return (
    <Suspense fallback={renderModel}>
      <Layout>
        <Route />
      </Layout>
    </Suspense>
  );
}

export default App;
