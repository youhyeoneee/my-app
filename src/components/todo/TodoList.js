import React, { useCallback, useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";
import ColorButton from "./ColorButton";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function TodoList() {
    const [inputs, setInputs] = useState({
        text: "",
        color: "",
    });

    const { text, color } = inputs;

    const [colorList, setColorList] = useState([
        "white",
        "yellow",
        "red",
        "pink",
    ]);
    const inputRef = useRef();

    const nextId = useRef(1);
    const [todoList, setTodoList] = useState([]); // TO DO LIST

    const onChange = (e) => {
        setInputs({
            ...inputs,
            text: e.target.value,
        });
    };

    const addTodo = useCallback(() => {
        const newTodo = {
            ...inputs,
            id: nextId.current,
        };

        console.log(`추가 : ${inputs}`);
        console.log(todoList);

        setTodoList((prev) => prev.concat(newTodo));
        focusInput(); // 입력란으로 초점
        setInputs({
            text: "",
            color: "",
        });
        nextId.current += 1;
    });

    const focusInput = () => {
        inputRef.current.focus();
    };

    const deleteTodo = useCallback((id) => {
        setTodoList((prev) => {
            return prev.filter((todo) => {
                return todo.id !== id;
            });
        });
    });

    const updateTodo = useCallback((id, newValue) => {
        console.log(`${id} 수정`);
        setTodoList((prev) => {
            prev.map((todo) =>
                todo.id === id ? { ...todo, text: newValue } : todo
            );
        });
        console.log(todoList);
    });

    const changeColor = useCallback((newColor) => {
        setInputs({
            ...inputs,
            color: newColor,
        });
    });

    useEffect(() => {}, [todoList]);

    return (
        <div class="todoListContainer">
            <h1>Todo App</h1>
            <div>
                <InputGroup className="mb-3">
                    <Form.Control
                        ref={inputRef}
                        style={{ backgroundColor: color }}
                        type="text"
                        placeholder="입력"
                        value={text}
                        onChange={onChange}
                    />
                    <Button
                        variant="secondary"
                        id="button-addon2"
                        onClick={addTodo}
                    >
                        입력
                    </Button>
                </InputGroup>
            </div>
            <div class="colorContainer">
                {colorList.map((elem) => (
                    <ColorButton color={elem} changeColor={changeColor} />
                ))}
            </div>
            <h3> Todo Items</h3>
            <div class="todoItemsContainer">
                {todoList.map((elem) => (
                    <TodoItem
                        todoItem={elem}
                        onDelete={deleteTodo}
                        onUpdate={updateTodo}
                    />
                ))}
            </div>
        </div>
    );
}
