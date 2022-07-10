import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, selectCount } from "./counterSlice";

function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(increase())}>Increase</button>
      {count}
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  );
}

export default Counter;
