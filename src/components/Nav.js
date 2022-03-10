import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <Link to="/"> Login</Link>
      <Link to="success"> Success</Link>
      <Link to="topvideos"> Top videos</Link>
      <Link to="tv"> TV</Link>
      <Link to="uploadvideo"> Upload Video</Link>
      <Link to="*"> Error page</Link>
    </nav>
  );
}

export default Nav;
