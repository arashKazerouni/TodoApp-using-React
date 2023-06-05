import React, { useContext, useState } from "react";

import { TiTick } from "react-icons/ti";
import EditTodo from "./EditTodo";
import Edit from "./buttons/Edit";
import TodosContext from "../context/todos";
const TodoItem = ({ item }) => {
  // State
  const [isEdit, setIsEdit] = useState(false);
  const [isComplete, setIsComplete] = useState(
    JSON.parse(localStorage.getItem(item.id)) || false
  );
  const { deleteTodoById, completeTodosById } = useContext(TodosContext);

  // Functions and Handlers
  const deleteHandler = () => {
    deleteTodoById(item.id);
  };
  const completeHandler = () => {
    setIsComplete(!isComplete);
    localStorage.setItem(item.id, !isComplete);
    completeTodosById(item.id, isComplete);
  };
  const editSubmitHandler = () => {
    setIsEdit(!isEdit);
  };
  const checkComplete = isComplete
    ? "line-through brightness-150 font-bold"
    : "";
  let content = (
    <div className="flex items-center w-full">
      <p className={`${checkComplete}}`}>{item.todo}</p>
      <Edit onClick={editSubmitHandler} />
    </div>
  );
  if (isEdit) {
    content = <EditTodo item={item} onEdit={editSubmitHandler} />;
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
