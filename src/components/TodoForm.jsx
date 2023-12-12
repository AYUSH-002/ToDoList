import { useState } from "react";

const TodoForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Low");

   const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() !== "") {
      onSubmit({ title, description, priority });
      setTitle("");
      setDescription("");
      setPriority("Medium");
    } else {
      console.error("Title cannot be empty");
    }
  };
  return (
    <form className="mt-8" onSubmit={handleSubmit}>
      <h1>Todo List</h1>
      <label className="block mb-2">
        Title:
        <input
          className="border p-2 w-full"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        Description:
        <input
          className="border p-2 w-full"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label className="block mb-2">
        Priority:
        <select
          className="border p-2 w-full"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;