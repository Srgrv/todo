import React from "react";
import classes from "./Desk.module.css";

const Desk = (props) => {
  let todos = props.todo.map((item, index) => {
    return (
      <div key={index} className={classes.desk}>
        <div className={classes.id}>{index + 1}</div>
        <div className={classes.desc}>{item.desc}</div>
        <button className={classes.button} onClick={() => props.delet(index)}>
          {item.button}
        </button>
      </div>
    );
  });

  return <div>{todos}</div>;
};

export default Desk;
