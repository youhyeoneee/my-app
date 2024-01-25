import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoList from "./components/todo/TodoList.js";
import Board from "./components/board/Board.js";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [visible, setVisible] = useState(false);

    return (
        // <div className="App">
        //     <TodoList />
        // </div>
        <Board />
    );
}
export default App;
