interface TodoListItemProps {
  todo: Todo;
  onRemoveTodo: RemoveTodo;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  onRemoveTodo,
}) => {
  const onDelete = () => {
    onRemoveTodo(todo);
  };

  return (
    <button className={"todo-row"} onClick={() => onDelete()}>
      {todo.text}
    </button>
  );
};
