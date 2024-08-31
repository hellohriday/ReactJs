import "./App.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <div>
      <h2>Learn about redux toolkit</h2>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
