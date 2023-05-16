import React from "react";

const TodoItem = ({ todo }) => {
  return (
    <li className="card flex hover:cursor-pointer hover:brightness-110 transition-all duration-200">
      {todo}
      <div className="buttons ml-auto flex gap-2">
        <button className="btn">Edit</button>
        <button className="btn">-</button>
      </div>
    </li>
  );
};

export default TodoItem;
