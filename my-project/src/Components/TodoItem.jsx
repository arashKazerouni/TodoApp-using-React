import React, { useState } from "react";

import { TiTick } from "react-icons/ti";
import EditTodo from "./EditTodo";
import Edit from "./buttons/Edit";
const TodoItem = ({ item, onDelete, onComplete, onSubmitEdit }) => {
  // State
  const [isEdit, setIsEdit] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Functions and Handlers
  const deleteHandler = () => {
    onDelete(item.id);
  };
  const completeHandler = () => {
    setIsComplete(!isComplete);
    onComplete(item.id);
  };
  const editHandler = () => {
    setIsEdit(!isEdit);
  };
  const checkComplete = isComplete
    ? "line-through brightness-150 font-bold"
    : "";
  let content = (
    <div className="flex items-center w-full">
      <p className={`${checkComplete}}`}>{item.todo}</p>
      <Edit onClick={editHandler} />
    </div>
  );
  if (isEdit) {
    content = (
      <EditTodo
        item={item}
        onSubmitEdit={onSubmitEdit}
        editHandler={editHandler}
      />
    );
  }
  return (
    <li className="card flex items-center gap-1 hover:brightness-110 transition-all duration-200">
      {content}
      <div className="buttons flex gap-2 items-center">
        <button onClick={deleteHandler} className="btn">
          -
        </button>
        <TiTick onClick={completeHandler} className="hover:cursor-pointer" />
      </div>
    </li>
  );
};

export default TodoItem;
