import React from "react";
import Todo from "./Todo/Todo";
import { connect } from "react-redux";
import { add, change } from "../../redux/MainReducer";

class TodoContainer extends React.Component {
  render() {
    return (
      <div>
        <Todo {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.main.value,
  };
};

export default connect(mapStateToProps, { add, change })(TodoContainer);
