import { useEffect, useState } from "react";
import initializeAuthentication from "./../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  GithubAuthProvider,
} from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // google sign in
  const signInUsingGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // github auth
  const signInUsingGithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // logout auth
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("on changed state", user);
        setUser(user);
      }
    });
  }, []);

  return {
    user,
    error,
    signInUsingGoogle,
    logOut,
    signInUsingGithub,
  };
};

export default useFirebase;
