import axios from "../../../../utils/axiosInstance/AxiosInstance";
import { ToDo } from "./ActionTypes";

//to get the list of all the tasks
export const getList = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(`/todo`);
      if (res && res.data) {
        dispatch(getSuccess(res.data));
        // debugger
      }
    } catch (err) {
      dispatch(getFailure(err));
    }
  };
};

const getSuccess = (data) => {
  return {
    type: ToDo.GET_TODO,
    payload: data,
  };
};

const getFailure = (err) => {
  return {
    type: ToDo.FAIL_TODO,
    payload: err,
  };
};

//adding of another task in the list
export const getAdd = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/todo", data);
      // console.log(data);
      if (res && res.data) {
        dispatch(addSuccess(res.data));
      }
    } catch (err) {
      console.log("An Error", err);
      dispatch(addFailure(err));
    }
  };
};

const addSuccess = (data) => {
  return {
    type: ToDo.ADD_TODO,
    payload: data,
  };
};

const addFailure = (err) => {
  return {
    type: ToDo.FAIL_TODO,
    payload: err,
  };
};

//removing the task from the list
export const getRemove = (taskId) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(`/todo/${taskId}`);
      if (res && res.data) {
        //getting the list after removal
        dispatch(getList());
      }
    } catch (err) {
      console.log("An Error", err);
    }
  };
};

//Editing the present list using id
export const getUpdate = (id, data) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(`/todo/${id}`, data);
      if (res && res.data) {
        dispatch(updateSuccess(res.data));
        debugger;
      }
    } catch (err) {
      console.log("There is an error in Edit", err);
    }
  };
};

const updateSuccess = (id) => {
  return {
    type: ToDo.UPDATE_TODO,
    payload: id,
  };
};
