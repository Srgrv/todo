import React from "react";

const Todo = (props) => {
  console.log(props);
  return (
    <div>
      <input
        value={props.value}
        onChange={(e) => props.change(e.target.value)}
      />
      <button onClick={props.add}>Add</button>
    </div>
  );
};

export default Todo;
