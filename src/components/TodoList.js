import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {

    const [text, setText] = useState("")
    const [todoList, setTodoList] = useState([1, 2, 3, 4]);
    const inputRef = useRef();

    const addTodo = () => {
        setTodoList([...todoList, text]); // 추가
        focusInput(); // 입력란으로 초점
        setText("") // 비우기
    }
    
    const focusInput = () => {
        inputRef.current.focus();
    };

    const deleteTodo = (todoValue) => {
        setTodoList(todoList.filter(value => todoValue !== value));
        console.log(` ${todoValue} 삭제 => ${todoList}`);
    };

    useEffect(() => {
        console.log("TODO 추가!")
    }, [todoList])

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
                {todoList.map(elem=><div class="todoItem"><TodoItem text={elem}/>
                        <button onClick={() => deleteTodo(elem)}>삭제</button></div>)}
            </div>
        </div>
    )
}