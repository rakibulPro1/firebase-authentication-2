import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <form className="mt-5">
        <h2 className="mb-4">Please Register</h2>
        <input type="text" placeholder="UserName" className="form-control" />
        <br />
        <input
          type="email"
          placeholder="Enter your Email"
          className="form-control"
        />
        <br />
        <input
          type="password"
          placeholder="Enter your Password"
          className="form-control"
        />
        <div>
          <Link to="/login">Already registered??</Link>
        </div>
        <button type="submit" className="mt-3 py-2 px-5 btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
