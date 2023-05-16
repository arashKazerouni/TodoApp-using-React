import React from "react";

import { TiTick } from "react-icons/ti";
const TodoItem = ({ item, onDelete, onComplete }) => {
  const deleteHandler = () => {
    onDelete(item.id);
  };
  const completeHandler = () => {
    onComplete(item.id);
  };
  const isComplete = item.state ? "line-through brightness-150 font-bold" : "";
  return (
    <li className="card flex hover:cursor-pointer hover:brightness-110 transition-all duration-200">
      <p className={`${isComplete}}`}>{item.todo}</p>
      <div className="buttons ml-auto flex gap-2 items-center">
        <button className="btn">Edit</button>
        <button onClick={deleteHandler} className="btn">
          -
        </button>
        <TiTick onClick={completeHandler} />
      </div>
    </li>
  );
};

export default TodoItem;
