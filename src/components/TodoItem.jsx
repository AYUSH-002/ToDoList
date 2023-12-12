import { useState } from "react";

const TodoItem = ({ todo, onDelete, onStatusChange, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);

  const handleEditSave = () => {
    try {
      const editedTodo = {
        ...todo,
        title: editedTitle,
        description: editedDescription,
      };
      onEdit(editedTodo);
      setIsEditing(false);
    } catch (error) {
      console.error("Error during edit:", error);
    }
  };
  

  return (
    <div className="border p-4 mb-4 rounded-md border-black">
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className="mb-2 border p-2 w-full"
          />
          <textarea
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
            className="mb-2 border p-2 w-full"
          />
          <div className="flex flex-row items-start">
            <button
              className="flex items-center bg-green-500 text-white px-2 py-1 rounded"
              onClick={handleEditSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white px-2 py-1 rounded"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="card">
            <h3 className="todo-title">{todo.title}</h3>
            <p className="mb-2">Desciption:{todo.description}</p>
            <p className="mb-2">Status: {todo.status}</p>
            <p className="mb-2">Priority: {todo.priority}</p>
          </div>

          <button onClick={onDelete}>Delete</button>
          <button onClick={() => onStatusChange("In Progress")}>In Progress</button>
          <button onClick={() => onStatusChange("Done")}>Done</button>
          <button onClick={() => onStatusChange("Not Yet Started")}>Not Yet Started</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default TodoItem;
