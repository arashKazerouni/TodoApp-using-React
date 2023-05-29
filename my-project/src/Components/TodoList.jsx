import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ list}) => {
  const mappedTodoList = list.map((item) => {
    return (
      <TodoItem
        item={item}
        key={item.id}
      />
    );
  });
  return <ul className="flex flex-col-reverse gap-3">{mappedTodoList}</ul>;
};

export default TodoList;
