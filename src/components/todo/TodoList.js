import React, { useCallback, useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";
import ColorButton from "./ColorButton";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function TodoList() {
    const url = "/todo";
    const headers = {
        "Content-type": "application/json; charset=UTF-8",
    };

    const [inputs, setInputs] = useState({
        content: "",
        color: "",
    });

    const { content, color } = inputs;

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
            content: e.target.value,
        });
    };

    // 조회
    const getTodoList = () => {
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                setTodoList(json); // 글 목록 저장
                console.log(json);
            });
    };

    useEffect(() => {
        getTodoList();
    }, []);

    // 추가
    const addTodo = () => {
        console.log("작성 : ", JSON.stringify(inputs));
        fetch(`${url}`, {
            method: "POST",
            body: JSON.stringify({
                content: inputs.content,
                color: inputs.color,
            }),
            headers: headers,
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .then(() => {
                getTodoList();
                focusInput();
                setInputs({ content: "", color: "" });
            });
    };

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
                todo.id === id ? { ...todo, content: newValue } : todo
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
                        value={content}
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
