import React from "react";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const { user } = useAuth();
  return (
    <div className="mt-5">
      <h2>This is Home page</h2>
      <h3>User: {user.displayName}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default Home;
