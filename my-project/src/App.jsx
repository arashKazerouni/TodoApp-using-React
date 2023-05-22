import { useState } from "react";
import CreateTodo from "./Components/CreateTodo";
import TodoList from "./Components/TodoList";
import axios from "axios";
function App() {
  // States
  const [todoList, setTodoList] = useState([]);
  // Functions
  //Getting Todos From CreateTodo
  const addNewTodo = async (todo) => {
    const response = await axios.post("http://localhost:3000/books", {
      state: false,
      todo,
    });
    const updatedTodoList = [...todoList, response.data];
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
  // Complete Todos By ID
  const completeTodosById = (id) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) item.state = !item.state;
      return item;
    });
    setTodoList(updatedTodoList);
  };
  // Edit Todos By ID
  const editTodoById = (id, title) => {
    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) item.todo = title;
      return item;
    });
    setTodoList(updatedTodoList);
  };
  return (
    <div className="mt-2 flex flex-col gap-2 max-w-md mx-auto">
      <CreateTodo onSubmit={addNewTodo} />
      <TodoList
        list={todoList}
        onDelete={deleteTodoById}
        onComplete={completeTodosById}
        onEdit={editTodoById}
      />
    </div>
  );
}

export default App;
