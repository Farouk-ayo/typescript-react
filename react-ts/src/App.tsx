import NewTodo from "./components/NewTodo";
import Todo from "./components/Todos";
import Todos from "./models/todo";

function App() {
  const todos = [new Todos("Learn React"), new Todos("Learn Typescript")];

  return (
    <div>
      <NewTodo />
      <Todo items={todos} />
    </div>
  );
}

export default App;
