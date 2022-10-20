import Todo from "../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  // props.children in typescript
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
