import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

export default function AddTodo() {

    const [text, setText] = useState("")
    const [todo, setTodo] = useState([1, 2, 3, 4]);
    const inputRef = useRef();

    const addTodo = () => {
        setTodo([...todo, text]); // 추가
        focusInput(); // 입력란으로 초점
        setText("") // 비우기
    }

    const focusInput = () => {
        inputRef.current.focus();
    };


    useEffect(() => {
        console.log("TODO 추가!")
    }, [todo])

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input ref={inputRef} type="text" placeholder="입력" value={text} onChange={e => {
                    setText(e.target.value);
                    console.log(`text : ${text}`);
                }}/>
                <button onClick={addTodo}>입력</button>
            </div>
            <h3> Todo Items</h3>
            <div> 
                {todo.map(elem=><div text={text}>{elem}</div>)}
            </div>
        </div>
    )
}