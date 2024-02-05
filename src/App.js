import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import TodoList from "./components/todo/TodoList.js";
import Board from "./components/board/Board.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import PostDetail from "./components/board/PostDetail.js";

function App() {
    const [visible, setVisible] = useState(false);

    return (
        // <div className="App">
        //     <TodoList />
        // </div>
        <Routes>
            <Route exact path="/" Component={Board} />
            <Route path="/:id" Component={PostDetail} />
        </Routes>
    );
}
export default App;
