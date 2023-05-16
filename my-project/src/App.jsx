import { useState } from "react";
import CreateTodo from "./Components/CreateTodo";
import TodoList from "./Components/TodoList";

function App() {
  // States
  const [todoList, setTodoList] = useState([]);
  // Functions
  //Getting Todos From CreateTodo
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
  // Deleting Todos By ID
  const deleteTodoById = (id) => {
    const updatedTodoList = todoList.filter((item) => {
      if (item.id === id) return;
      return item;
    });
    setTodoList(updatedTodoList);
  };
  return (
    <div className="mx-4 mt-2 flex flex-col gap-2">
      <CreateTodo onSubmit={addNewTodo} />
      <TodoList list={todoList} onDelete={deleteTodoById} />
    </div>
  );
}

export default App;
