import './App.css'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { useTodo } from './contexts/TodoContext';

const App = () => {
  const { todos, addTodo, deleteTodo, changeStatus } = useTodo();

  return (
    <div className='app-container'>
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onStatusChange={changeStatus}
      />
    </div>
  );
};

export default App;
