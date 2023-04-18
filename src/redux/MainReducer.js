const ADD = "ADD";
const CHANGE = "CHANGE";
const DELETE = "DELETE";

const initialState = {
  todo: [
    {
      id: 0,
      desc: "read book",
      button: "ok",
    },
    {
      id: 1,
      desc: "clear kitchen",
      button: "ok",
    },
  ],
  value: "",
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE:
      return {
        ...state,
        todo: [
          ...state.todo.slice(0, action.id),
          ...state.todo.slice(action.id + 1),
        ],
      };
    case ADD:
      return {
        ...state,
        todo: [
          ...state.todo,
          { id: state.todo.length + 1, desc: state.value, button: "ok" },
        ],
        value: "",
      };

    case CHANGE:
      return { ...state, value: action.value };
    default:
      return state;
  }
};

export const add = () => {
  return { type: ADD };
};

export const change = (value) => {
  return { type: CHANGE, value };
};

export const delet = (id) => {
  return { type: DELETE, id };
};
export default MainReducer;
