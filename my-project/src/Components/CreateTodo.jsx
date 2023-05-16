import React, { useState } from "react";

const CreateTodo = ({ onSubmit }) => {
  const [todoValue, setTodoValue] = useState("");
  const addTodoHandler = (e) => {
    e.preventDefault();
    if (todoValue !== "") onSubmit(todoValue);
    setTodoValue("");
  };
  return (
    <form action="" className="card flex mb-3" onSubmit={addTodoHandler}>
      <label htmlFor="add-todo"></label>
      <input
        className="input"
        type="text"
        placeholder="New Todo.."
        id="add-todo"
        autoFocus
        autoComplete="off"
        value={todoValue}
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <button
        className="text-slate-500 ml-auto font-bold hover:cursor-pointer"
        type="submit"
      >
        +
      </button>
    </form>
  );
};

export default CreateTodo;
