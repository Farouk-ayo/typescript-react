import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{ items: Todo[]; removeEach: (id: string) => void }> = (
  props
) => {
  // props.children in typescript

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          removeHandler={props.removeEach.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
