import React, { useEffect, useRef, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function TodoItem({ todoItem, onDelete, onUpdate }) {
    const [todo, setTodo] = useState({});

    useEffect(() => {
        setTodo(todoItem);
    }, []);

    useEffect(() => {
        setTodo({
            id: todoItem._id,
            content: todoItem.author,
            color: todoItem.color,
        });

        console.log(todo.id);
    }, [todoItem]);

    const onChange = (e) => {
        setTodo({
            ...todo,
            content: e.target.value,
        });
        onUpdate(todo.id, e.target.value);
    };

    return (
        <div class="todoItemContainer">
            <InputGroup className="mb-3">
                <Form.Control
                    value={todoItem.content}
                    onChange={onChange}
                    style={{ backgroundColor: todoItem.color }}
                ></Form.Control>
                <Button
                    variant="danger"
                    id="button-addon2"
                    onClick={() => onDelete(todoItem._id)}
                >
                    삭제
                </Button>
            </InputGroup>
        </div>
    );
}
