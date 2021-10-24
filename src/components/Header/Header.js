import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <div style={{ marginTop: "30px" }}>
      <Link to="/home" className="link">
        Home
      </Link>
      <Link to="/shipping" className="link">
        Shipping
      </Link>
      <Link to="/login" className="link">
        Login
      </Link>
      <Link to="/register" className="link">
        Register
      </Link>
      {user?.email && (
        <button onClick={logOut} className="mt-3">
          log out
        </button>
      )}
    </div>
  );
};

export default Header;
