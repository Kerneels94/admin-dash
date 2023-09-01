import { useState, useEffect } from "react";

const Todo = (props) => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // Create a function that adds the todo to the todos state
  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  // Create a useEffect hook that will run when the todo state is updated
  useEffect(() => {
    setTodo(todo);
  }, [todo]);

  // Return the JSX for the component
  return (
    <>
      <div className="todo-container">
        <label
          htmlFor="add-todo"
          style={{ color: props.color, fontSize: props.fontsize }}
        >
          Add Todo
        </label>
        <input
          type="text"
          name="add-todo"
          id="add-todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={() => addTodo()} disabled={!todo}>
          submit
        </button>
      </div>
      <div className="render-todo">
        {todos.map((todo) => (
          <div>{todo}</div>
        ))}
      </div>
    </>
  );
};

export default Todo;
