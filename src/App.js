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
        <Routes>
            <Route exact path="/board" Component={Board} />
            <Route path="/board/:id" Component={PostDetail} />
            <Route path="/todo" Component={TodoList} />
        </Routes>
    );
}
export default App;
