import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function header() {
  return (
    <div className="headerHead">
      <h2 className="headText">Head Content</h2>
      <div>
        <Link to="/">Login</Link>
      </div>
      <div>
        <Link to="/register">Register</Link>
      </div>
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

export default header;
