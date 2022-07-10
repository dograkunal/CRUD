import axios from "../../utils/axiosInstance/AxiosInstance";
import { useNavigate } from "react-router-dom";
import { Register } from "./ActionTypes";

function register(payload, navigate) {
  return async (dispatch) => {
    dispatch(registerRequest());
    try {
      const res = await axios.post("/auth/register", payload);
      if (res && res.data) {
        localStorage.setItem("token", res.data.token);
        dispatch(registerSuccess(res.data));
        navigate("/dashboard");
      }
    } catch (err) {
      dispatch(registerFailure(err));
    }
  };
}

const registerRequest = () => {
  return {
    type: Register.REGISTER_REQUEST,
  };
};

const registerSuccess = (data) => {
  return {
    type: Register.REGISTER_SUCCESS,
    payload: data,
  };
};
const registerFailure = (err) => {
  return {
    type: Register.REGISTER_FAILURE,
    payload: err,
  };
};

export const registerActions = {
  register,
};
