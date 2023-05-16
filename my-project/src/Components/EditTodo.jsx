import React, { useState } from "react";
import Edit from "./buttons/Edit";

const EditTodo = ({ item, onSubmitEdit, editHandler }) => {
  const [newTodo, setNewTodo] = useState(item.todo);
  const handleEdit = (e) => {
    e.preventDefault();
    onSubmitEdit(item.id, newTodo);
    editHandler();
  };
  return (
    <form onSubmit={handleEdit} className="flex items-center w-full">
      <label htmlFor="edit-todo"></label>
      <input
        className="capitalize outline-none input"
        type="text"
        id="edit-todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        autoFocus
      />
      <Edit onClick={handleEdit} />
    </form>
  );
};

export default EditTodo;
