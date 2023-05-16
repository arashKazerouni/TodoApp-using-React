import React from "react";

const CreateTodo = () => {
  const addTodo = (e) => {
    e.preventDefault();

  };
  return (
    <form action="" className="card flex mb-2" onSubmit={addTodo}>
      <label htmlFor="add-todo"></label>
      <input
        className="input"
        type="text"
        placeholder="New Todo.."
        id="add-todo"
        autoFocus
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
