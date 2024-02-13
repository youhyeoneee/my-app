import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import TodoList from "./components/todo/TodoList.js";
import Board from "./components/board/Board.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from "react-router-dom";
import PostDetail from "./components/board/PostDetail.js";
import SignUp from "./components/user/SignUp.js";
import LogIn from "./components/user/LogIn.js";
import { useNavigate } from "react-router-dom";

function App() {
    const [visible, setVisible] = useState(false);
    const [user, setUser] = useState(null);
    let navigate = useNavigate();

    useEffect(() => {
        if (user) {
            localStorage.setItem("nickname", user.nickname);
            localStorage.setItem("email", user.email);
            localStorage.setItem("token", user.token);
        } else {
            localStorage.setItem("nickname", null);
            localStorage.setItem("email", null);
            localStorage.setItem("token", null);
        }
    }, [user]);

    let goBack = () => {
        navigate(-1);
    };

    const headers = {
        "Content-type": "application/json; charset=UTF-8",
    };

    const logOut = (data) => {
        const token = localStorage.getItem("token");
        // const payload = jwtDecode(token);
        // console.log(payload);

        fetch(`/api/logout`, {
            method: "POST",
            body: JSON.stringify({
                token: token,
            }),
            headers: headers,
        })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                setUser(null);
            }) // 성공
            .then(() => {});
    };

    return (
        <Routes>
            <Route exact path="/login" element={<LogIn setUser={setUser} />} />
            <Route exact path="/signup" Component={SignUp} />
            <Route
                exact
                path="/board"
                element={<Board user={user} logOut={logOut} />}
            />
            <Route path="/board/:id" Component={PostDetail} />
            <Route path="/todo" Component={TodoList} />
        </Routes>
    );
}
export default App;
