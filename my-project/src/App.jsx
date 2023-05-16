import { useState } from "react";
import CreateTodo from "./Components/CreateTodo";

function App() {
  const [todoList, setTodoList] = useState([]);
  const addNewTodo = (todo) => {
    const updatedTodoList = [
      ...todoList,
      {
        id: Math.trunc(Math.random() * 9999),
        todo,
      },
    ];
    setTodoList(updatedTodoList);
  };
  return (
    <div className="mx-4 mt-2 flex flex-col gap-2">
      <CreateTodo onSubmit={addNewTodo} />
    </div>
  );
}

export default App;
