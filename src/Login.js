import { Button } from "@material-ui/core";
import React from "react";
import { login } from "./features/userSlice";
import "./Login.css";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { provider } from "./firebase";
import { useHistory } from "react-router";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((userCredential) => {
        var user = userCredential.user;
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL
          })
        );
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <Button
        onClick={signIn}
        className="login__button"
        variant="contained"
        color="primary"
      >
        Login
      </Button>
    </div>
  );
}

export default Login;
