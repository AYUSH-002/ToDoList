import { createContext, useContext, useReducer } from "react";

const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "CHANGE_STATUS":
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, status: action.payload.status } : todo
      );
    default:
      return state;
  }
};

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(todoReducer, []);

  const addTodo = (todo) => {
    dispatch({ type: "ADD_TODO", payload: { ...todo, id: Date.now(), status: "Not Yet Started" } });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const changeStatus = (id, status) => {
    dispatch({ type: "CHANGE_STATUS", payload: { id, status } });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, changeStatus }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  return useContext(TodoContext);
};