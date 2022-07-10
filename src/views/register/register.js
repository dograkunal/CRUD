import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./registerForm";
import { registerActions } from "./registerActions";
import Button from "../../utils/button";

function Register() {
  const token = useSelector((state) => state.login.token);
  // const isloading = useSelector((state) => state.registerState);
  // const isloading = false;
  const navigate = useNavigate();
  const register = useSelector((state) => state);
  console.log(register, "My registers data");

  useEffect(() => {
    if (token) {
      navigate("/dashboard", { replace: true });
    }
  }, [token]);

  const handleloginClick = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      <RegisterForm />
      <Button type="Submit" text="To login" onClick={handleloginClick} />
    </>
  );
}

export default Register;
