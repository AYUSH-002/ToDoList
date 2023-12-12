import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onStatusChange }) => {
  const [priorityFilter, setPriorityFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTodos = todos.filter((todo) => {
    const matchesPriority = priorityFilter === "All" || todo.priority === priorityFilter;
    const matchesStatus = statusFilter === "All" || todo.status === statusFilter;
    const matchesSearch = todo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         todo.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPriority && matchesStatus && matchesSearch;
  });

  return (
    <div className="mt-8">
      <div className="mb-4">
        <label className="block mb-2">
          Priority Filter:
          <select
            className="border p-2"
            value={priorityFilter}
            onChange={(e) => setPriorityFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label className="block mb-2">
          Status Filter:
          <select
            className="border p-2"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
            <option value="Not Yet Started">Not Yet Started</option>
          </select>
        </label>
        <label className="block mb-2">
          Search by Title or Description:
          <input
            className="border p-2"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </label>
      </div>

      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={() => onDelete(todo.id)}
          onStatusChange={(status) => onStatusChange(todo.id, status)}
        />
      ))}
    </div>
  );
};

export default TodoList;
