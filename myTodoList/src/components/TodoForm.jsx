import React from "react";
import TodoItem from "./TodoItem";
import TodoCard from "./TodoCard";
import { list } from "postcss";
import useTodoContext from "./context/TodoContext";

function TodoForm() {
  const [msg, setMsg] = React.useState("");

  const { addedItem } = useTodoContext();

  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (msg != null && msg !== "") {
      addedItem(msg);
      setMsg("");
    }
  };
  return (
    <form className="flex" onSubmit={onsubmitHandler}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        value={msg}
      />

      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
