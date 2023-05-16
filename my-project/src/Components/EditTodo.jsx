import React, { useState } from "react";

const EditTodo = ({ item, onSubmitEdit, editHandler }) => {
  const [newTodo, setNewTodo] = useState(item.todo);
  const handleEdit = (e) => {
    e.preventDefault();
    onSubmitEdit(item.id, newTodo);
    editHandler();
  };
  return (
    <form onSubmit={handleEdit}>
      <label htmlFor="edit-todo"></label>
      <input
        className="capitalize outline-none"
        type="text"
        id="edit-todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        autoFocus
      />
    </form>
  );
};

export default EditTodo;
