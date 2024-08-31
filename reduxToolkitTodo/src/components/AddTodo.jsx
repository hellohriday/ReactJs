import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodo,
  setEditVisibleFlag,
} from "../features/todo/todoSlice";

function AddTodo() {
  const todos = useSelector((state) => state.todos);

  const [input, setInput] = useState("");
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateId, setupdateId] = useState(0);

  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (input !== null && input !== "") {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  const updateBtnHandler = (e) => {
    e.preventDefault();
    // debugger;
    const todo = {
      id: updateId,
      text: input,
    };
    dispatch(updateTodo(todo));
    dispatch(setEditVisibleFlag({ id: updateId, value: true }));
  };

  useEffect(() => {
    // debugger;
    const todo = todos.filter((e) => e.isEditVisible == false);
    if (todo.length > 0) {
      setInput(todo[0]?.text);
      setShowUpdate(true);
      setupdateId(todo[0]?.id);
    } else {
      setInput("");
      setShowUpdate(false);
    }
  }, [todos]);

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {!showUpdate ? (
        <button
          type="submit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Add Todo
        </button>
      ) : (
        <button
          type="edit"
          className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          onClick={updateBtnHandler}
        >
          Update
        </button>
      )}
    </form>
  );
}

export default AddTodo;
