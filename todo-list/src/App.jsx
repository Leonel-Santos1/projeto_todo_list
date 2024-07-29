import { useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidades",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Estudar React",
      category: "Estudo",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Fazer compras",
      category: "Casa",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodo = {
      id: todos.length + 1,
      text,
      category,
      isCompleted: false,
    };
    setTodos([...todos, newTodo]);
  }

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {
      todos.map(todo => (
        <Todo key={todo.id} todo={todo} />
      ))
      }
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>;
}

export default App;
