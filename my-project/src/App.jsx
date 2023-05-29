import { useContext, useEffect, useState } from "react";
import CreateTodo from "./Components/CreateTodo";
import TodoList from "./Components/TodoList";
import TodosContext from "./context/todos";
function App() {
  const { fetchTodos, todoList } = useContext(TodosContext);
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="mt-2 flex flex-col gap-2 max-w-md mx-auto">
      <CreateTodo />
      <TodoList list={todoList} />
    </div>
  );
}

export default App;
