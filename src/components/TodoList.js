import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {

    const [text, setText] = useState("")
    const [todoList, setTodoList] = useState([1, 2, 3, 4]);
    const [colorList, setColorList] = useState(["alice-blue", "red", "yellow", "pink"]);
    const inputRef = useRef();

    const addTodo = () => {
        setTodoList([...todoList, text]); // 추가
        focusInput(); // 입력란으로 초점
        setText("") // 비우기
    }
    
    const focusInput = () => {
        inputRef.current.focus();
    };

    function deleteTodo (todoValue) {
        console.log(
            todoList.filter(value => todoValue !== value)
        )
        setTodoList(todoList.filter(value => todoValue !== value));
        // console.log(` ${todoValue} 삭제 => ${todoList}`);
    };

    function updateTodo(value, newValue) {
        setTodoList(todoList.map(
            todo => todo === value? newValue : todo
        ));
        console.log(` ${value} 수정 ${newValue}  => ${todoList}`);
    };

    useEffect(() => {
    }, [todoList])

    return (
        <div class="todoListContainer">
            <h1>Todo App</h1>
            <div>
                <input ref={inputRef} type="text" placeholder="입력" value={text} onChange={e => {
                    setText(e.target.value);
                    console.log(`text : ${text}`);
                }}/>
                <button onClick={addTodo}>입력</button>
            </div>
            <div class="colorContainer">
                <button class="colorBtn backgroundAliceBlue"/>
                <button class="colorBtn backgroundYellow"/>
                <button class="colorBtn backgroundRed"/>
                <button class="colorBtn backgroundPink"/>
            </div>
            <h3> Todo Items</h3>
            <div class="todoItemsContainer">
                {todoList.map(elem=><TodoItem text={elem} deleteTodo={deleteTodo} updateTodo={updateTodo}/>)}
            </div>
        </div>
    )
}