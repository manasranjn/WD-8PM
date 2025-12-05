import React, { useState, useCallback } from "react";

function TodoItem({ todo, onDelete }) {
  // console.log("Rendering Todo:", todo);
  return (
    <li>
      {todo} <button onClick={onDelete}>Delete</button>
    </li>
  );
}

const TodoApp = () => {
  const [allTodo, setallTodo] = useState(["Learn React", "Build Project"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    setallTodo([...allTodo, newTodo]);
    setNewTodo("");
    console.log(allTodo);
  };

  // Using useCallback to prevent re-creating function every render
  const deleteTodo = useCallback(
    (todo) => {
      setallTodo((prev) => prev.filter((t) => t !== todo));
    },
    [setallTodo]
  );

  return (
    <div>
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="New todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {allTodo.map((t, i) => (
          <TodoItem key={i} todo={t} onDelete={() => deleteTodo(t)} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
