import { useState } from "react";
import "./App.css";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complete: false }]);
    }
  };

  const removeTodo: RemoveTodo = (todoToRemove) => {
    let updatedTodos: Array<Todo> = todos.filter(
      (todo) => todo.text != todoToRemove.text
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <header>
        <h1>MY TODO APP</h1>
      </header>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} onRemoveTodo={removeTodo} />
    </div>
  );
}

export default App;
