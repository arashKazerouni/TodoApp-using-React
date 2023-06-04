import { createContext, useState, useCallback } from "react";
import axios from "axios";
const TodosContext = createContext();
const Provider = ({ children }) => {
  // States
  const [todoList, setTodoList] = useState([]);
  // Functions
  // Fetching data From API
  const fetchTodos = useCallback(async () => {
    const response = await axios.get("http://localhost:3000/books");
    setTodoList(response.data);
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
        return { ...item, ...response.data };
      }
      return item;
    });
    setTodoList(updatedTodoList);
  };
  // Edit Todos By ID
  const editTodoById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3000/books/${id}`, {
      todo: newTitle,
    });
    const updatedTodoList = todoList.map((item) => {
      if (item.id === id) {
        return { ...item, ...response.data };
      }
      return item;
    });
    setTodoList(updatedTodoList);
  };
  const valueToShare = {
    todoList,
    fetchTodos,
    addNewTodo,
    deleteTodoById,
    completeTodosById,
    editTodoById,
  };
  return (
    <TodosContext.Provider value={valueToShare}>
      {children}
    </TodosContext.Provider>
  );
};
export { Provider };
export default TodosContext;
