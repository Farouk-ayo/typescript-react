import { useRef } from "react";

const NewTodo = () => {
  const todoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text"></label>
      <input type="text" id="text" ref={todoRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
