import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark">
         <Link class="navbar-brand" to="/todo-list"> Home</Link>
         <Link class="navbar-brand" to="/favourites"> Favourite</Link>
      </nav>
    </div>
  );
}

export default Header;
