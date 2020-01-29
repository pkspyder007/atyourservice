import React from "react";
import { Link, HashRouter } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <HashRouter>
          <Link to="/">QuickWork</Link>
        </HashRouter>
      </h1>
    </header>
  );
}

export default Header;
