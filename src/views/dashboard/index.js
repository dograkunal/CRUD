import React, { useEffect, useState } from "react";
import EditModal from "./editModal/EditModal";
import { useSelector, useDispatch } from "react-redux";
import { getList, getAdd, getRemove } from "./to-do/reducer/todoActions";
import Button from "../../utils/button";

function Dashboard() {
  const [field, setField] = useState({
    task: "Going to be the world's greatest swordsman!",
    creator: "Roronoa Zoro",
    isImmediate: false,
  });

  const [modal, setModal] = useState(false);
  const [flag, setFlag] = useState(false);
  const [listLen, setLen] = useState(0);
  const dispatch = useDispatch();

  const list = useSelector((state) => state.todo.tasksList);
  // debugger;
  console.log(list, "Information");

  useEffect(() => {
    if (list && list.length && list.length > 0) {
      dispatch(getList());
      setLen(list.length);
      setFlag(!flag);
    }
  }, [flag]);

  useEffect(() => {}, [listLen]);

  const handleAdd = (data) => {
    data.preventDefault();
    // debugger;
    console.log(data, "Data it is", field);
    //field or data which to dispatch?, Should be field as setting in local state

    dispatch(getAdd(field));
    // dispatch(getAdd(data));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    //changing state, Should do it or not?
    setField((field) => ({ ...field, [name]: value }));
  };

  return (
    <div>
      <h3>To-Do Application</h3>
      <EditModal show={modal} close={() => setModal(!modal)} />
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add a Task"
          value={field.task}
          name="task"
          onChange={handleChange}
        />
        <input
          type="creator"
          placeholder="Creator Name"
          value={field.creator}
          name="creator"
          onChange={handleChange}
        />
        <Button type="submit" text="ADD" />
        {/* Get all will bring all the task list present*/}
        <Button onClick={() => dispatch(getList())} text="Get all tasks" />
      </form>
      <div>
        <Button onClick={() => setModal(!modal)} text="Edit" />
      </div>
      <div>
        {list &&
          list.map((data, index) => (
            <div key={index}>
              <ol>
                <li>{data.taskId}</li>
                <li>{data && data.task}</li>
                <li>{data && data.creator}</li>
              </ol>
              <Button
                key={data.taskId}
                onClick={() => dispatch(getRemove(data.taskId))}
                text="Delete task"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
