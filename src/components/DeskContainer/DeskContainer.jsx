import React from "react";
import Desk from "./Desk/Desk";
import { connect } from "react-redux";
import { delet } from "../../redux/MainReducer";

class DeskContainer extends React.Component {
  render() {
    return (
      <div>
        <Desk {...this.props} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    todo: state.main.todo,
  };
};

export default connect(mapStateToProps, { delet })(DeskContainer);
