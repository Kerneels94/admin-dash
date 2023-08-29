import { useState, useEffect } from "react";

const Todo = () => {
  /**
   * State
   */
  const [todo, setTodo] = useState("");
  /**
   * Functions
   */

  useEffect(() => {
    setTodo(todo);
  }, []);

  return (
    <>
      <div className="todo-container">
        <label htmlFor="add-todo">Add Todo</label>
        <input
          type="text"
          name="add-todo"
          id="add-todo"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>submit</button>
      </div>
      <div className="render-todo">{todo}</div>
    </>
  );
};

export default Todo;
