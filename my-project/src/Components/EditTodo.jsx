import React, { useContext, useState } from "react";
import Edit from "./buttons/Edit";
import TodosContext from "../context/todos";
// import TodosContext from "../context/todos";

const EditTodo = ({ item, onEdit }) => {
  const [newTodo, setNewTodo] = useState(item.todo);
  const { editTodoById } = useContext(TodosContext);
  const changeHandle = (e) => setNewTodo(e.target.value);
  const handleEdit = (e) => {
    e.preventDefault();
    setNewTodo(newTodo);
    editTodoById(item.id, newTodo);
    onEdit();
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
