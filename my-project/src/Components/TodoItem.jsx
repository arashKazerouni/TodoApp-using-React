import React from "react";

const TodoItem = ({ item, onDelete }) => {
  const deleteHandler = () => {
    onDelete(item.id);
  };
  return (
    <li className="card flex hover:cursor-pointer hover:brightness-110 transition-all duration-200">
      {item.todo}
      <div className="buttons ml-auto flex gap-2">
        <button className="btn">Edit</button>
        <button onClick={deleteHandler} className="btn">
          -
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
