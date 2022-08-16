import React from "react";
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Array<Todo>;
  onRemoveTodo: RemoveTodo;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onRemoveTodo}) => {
  return (
    <ul>
     {todos.map(todo => (
       <TodoListItem
          key={todo.text}
          todo={todo}
          onRemoveTodo={onRemoveTodo}
        />
     ))}
    </ul>
  );
};
