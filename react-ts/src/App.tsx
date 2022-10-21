import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDo = (todoTex: string) => {
    const newTodo = new Todo(todoTex);

    setTodos((prevState) => {
      return prevState.concat(newTodo);
    });
  };
  const removeTodo = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };
  return (
    <div>
      <NewTodo onAddTodo={addToDo} />
      <Todos items={todos} removeEach={removeTodo} />
    </div>
  );
}

export default App;
