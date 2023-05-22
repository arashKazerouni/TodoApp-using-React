import { useEffect, useState } from "react";
import CreateTodo from "./Components/CreateTodo";
import TodoList from "./Components/TodoList";
import axios from "axios";
function App() {
  // States
  const [todoList, setTodoList] = useState([]);
  // Functions
  // Fetching data From API
  const fetchTodos = async () => {
    const response = await axios.get("http://localhost:3000/books");
    setTodoList(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
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
  const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3000/books/${id}`);
    const updatedTodoList = todoList.filter((item) => {
      if (item.id === id) return;
      return item;
    });
    setTodoList(updatedTodoList);
  };
  // Complete Todos By ID
  const completeTodosById = async (id, newState) => {
    const response = await axios.patch(`http://localhost:3000/books/${id}`, {
      state: newState,
    });
    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, ...response.data};
      }
      return item;
    });
    setTodoList(updatedTodoList);
  };
  // Edit Todos By ID
  const editTodoById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3000/books/${id}`, {
      title: newTitle,
    });
    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, ...response.data };
      }
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
