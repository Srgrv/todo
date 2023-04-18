import React from "react";
import TodoContainer from "../components/TodoContainer/TodoContainer";
import DeskContainer from "../components/DeskContainer/DeskContainer";

const MainPage = () => {
  return (
    <div>
      <TodoContainer />
      <DeskContainer />
    </div>
  );
};

export default MainPage;
