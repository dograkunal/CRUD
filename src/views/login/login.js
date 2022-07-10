import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../utils/button";
import LoginForm from "./loginForm";

function Login() {
  const token = useSelector((state) => state.login.token);
  const navigate = useNavigate();
  // const user = useSelector((state) => state.login);
  // console.log(user, "User data");

  useEffect(() => {
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [token]);

  const handleRegisterClick = () => {
    navigate("/register", { replace: true });
  };

  return (
    <>
      <LoginForm />
      <Button text="navigate to register" onClick={handleRegisterClick} />
    </>
  );
}

export default Login;
