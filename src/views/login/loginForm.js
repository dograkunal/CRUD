import React from "react";
import { Formik } from "formik";
import { loginActions } from "./loginActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Button from "../../utils/button";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const isloading = useSelector((state) => state.loginState.isloading);
  return (
    <Formik
      initialValues={{
        email: "kunaldogra123@abc.com",
        password: "1234567",
      }}
      onSubmit={(values) => {
        dispatch(loginActions.login(values, navigate));
      }}
      validationSchema={yup.object().shape({
        email: yup
          .string()
          .email("Invalid Format")
          .required("Email is required"),
        password: yup
          .string()
          .min(6, "Password must be at least 8 characters")
          .required("Required Password"),
      })}
    >
      {({
        values,
        handleChange,
        errors,
        setFieldTouched,
        touched,
        handleSubmit,
      }) => (
        <div className="">
          <div>
            <input
              placeholder="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange("email")}
              onBlur={() => {
                setFieldTouched("email");
              }}
            />

            {touched.email && errors.email ? <p>{errors.email}</p> : null}
          </div>
          <div>
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange("password")}
              onBlur={() => {
                setFieldTouched("password");
              }}
            />
            {touched.password && errors.password ? (
              <p>{errors.password}</p>
            ) : null}
          </div>

          <div>
            {/* <button type="submit" onClick={handleSubmit} disabled={isloading}>
              Submit
            </button> */}
            <Button type="submit" onClick={handleSubmit} text="Submit" />
          </div>
        </div>
      )}
    </Formik>
  );
}

export default LoginForm;
