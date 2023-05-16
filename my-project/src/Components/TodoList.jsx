import React from "react";

const TodoList = ({ list }) => {
  const mappedTodoList = list.map((item) => {
    return (
      <li className="card flex" key={item.id}>
        {item.todo}
        <div className="buttons ml-auto flex gap-2">
          <button className="btn">Edit</button>
          <button className="btn">-</button>
        </div>
      </li>
    );
  });
  return <ul className="flex flex-col-reverse gap-3">{mappedTodoList}</ul>;
};

export default TodoList;
