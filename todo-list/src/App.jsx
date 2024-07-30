import { useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";

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

  const removeTodo = (id) = {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === ? todo.isCompleted = !todo.isCompleted)
    setTodos(newTodos);
  }
  
  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <Search />
    <div className="todo-list">
      {
      todos.map(todo => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
      ))
      }
    </div>
    <TodoForm addTodo={addTodo}/>
  </div>;
}

export default App;
