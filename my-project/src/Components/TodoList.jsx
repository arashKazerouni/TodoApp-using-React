import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list, onDelete }) => {
  const mappedTodoList = list.map((item) => {
    return <TodoItem item={item} key={item.id} onDelete={onDelete} />;
  });
  return <ul className="flex flex-col-reverse gap-3">{mappedTodoList}</ul>;
};

export default TodoList;
