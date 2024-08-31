import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { TodoContextProvider } from "./context/TodoContext";
import { TodoContext } from "./context/TodoContext";

function TodoCard() {
  const [listTodo, setListTodo] = React.useState([]);

  const addedItem = (msg) => {
    let obj = {
      id: Math.floor(Math.random() * 1000),
      text: msg,
      completed: false,
    };

    setListTodo((prevList) => [...prevList, obj]);
  };
  // console.log(listTodo);

  const deleteTodo = (id) => {
    setListTodo((prevlist) => prevlist.filter((e) => e.id != id));
  };

  const toggleCompleted = (id) => {
    // debugger;
    let todolist = JSON.parse(localStorage.getItem("result"));

    todolist.forEach((element) => {
      if (element.id == id) {
        element.completed = !element.completed;
      }
    });

    setListTodo(todolist);
  };

  const editTodo = (id, todoMsg) => {
    let todolist = JSON.parse(localStorage.getItem("result"));

    todolist.forEach((element) => {
      if (element.id == id) {
        element.text = todoMsg;
      }
    });

    setListTodo(todolist);
  };

  React.useEffect(() => {
    const results = JSON.parse(localStorage.getItem("result"));
    if (results && results.length > 0) {
      setListTodo(results);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("result", JSON.stringify(listTodo));
  }, [listTodo]);

  return (
    <TodoContext.Provider
      value={{ addedItem, deleteTodo, editTodo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          {listTodo !== null &&
            listTodo.map((element, index) => (
              <div className="flex flex-wrap gap-y-3" key={element.id}>
                <TodoItem
                  todo={element}
                  // editTodo={editTodo}
                  // toggleCompleted={toggleCompleted}
                  // deleteTodo={deleteTodo}
                />
              </div>
            ))}
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default TodoCard;
