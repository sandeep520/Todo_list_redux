import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutHandler } from "../Store/actions";

function LandingPage() {
  const isAuthenticated = useSelector((state) => state?.user?.id);
  const dispatch = useDispatch();

  return (
    <div>
      {!isAuthenticated ? (
        <Link to="/sign-up">
          <button type="button" class="btn btn-primary">
            Sign Up
          </button>
        </Link>
      ) : (
        <>
          <Link to="/sign-up">
            <button
              type="button"
              class="btn btn-danger"
              onClick={() => dispatch(logOutHandler())}
            >
              Log Out
            </button>
          </Link>

          <Link to="/todo-list">
            <button type="button" class="btn btn-primary">
              ToDO List
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default LandingPage;
