import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoList from "./components/todo/TodoList.js";
import Board from "./components/board/Board.js";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <TodoList />
      {/* <Board /> */}
    </div>
  );
}
export default App;
