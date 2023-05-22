import React, { useState } from "react";
import Edit from "./buttons/Edit";

const EditTodo = ({ item, editSubmitHandler }) => {
  const [newTodo, setNewTodo] = useState(item.todo);
  const changeHandle = (e) => setNewTodo(e.target.value);
  const handleEdit = (e) => {
    e.preventDefault();
    setNewTodo(newTodo);
    editSubmitHandler(item.id, newTodo);
  };
  return (
    <form onSubmit={handleEdit} className="flex items-center w-full">
      <label htmlFor="edit-todo"></label>
      <input
        className="capitalize outline-none input"
        type="text"
        id="edit-todo"
        value={newTodo}
        onChange={changeHandle}
        autoFocus
        autoComplete="off"
      />
      <Edit onClick={handleEdit} />
    </form>
  );
};

export default EditTodo;
