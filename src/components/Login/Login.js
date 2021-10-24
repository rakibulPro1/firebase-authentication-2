import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const { signInUsingGoogle, signInUsingGithub } = useAuth();
  return (
    <div className="mt-5">
      <h2>Please Login</h2>
      <button onClick={signInUsingGoogle} className="me-3">
        Google Sign In
      </button>
      <button onClick={signInUsingGithub}>Github Sign In</button>
      <br />
      <Link to="/register">New User?</Link>
    </div>
  );
};

export default Login;
