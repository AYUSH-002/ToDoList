import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import { useTodo } from "../contexts/TodoContext";

const Home = () => {
  const { todos, addTodo, deleteTodo, changeStatus } = useTodo();

  return (
    <div className="app-container">
      <TodoForm onSubmit={addTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onStatusChange={changeStatus} />
    </div>
  );
};

export default Home;

