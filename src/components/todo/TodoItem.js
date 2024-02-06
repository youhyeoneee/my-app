import React, { useEffect, useRef, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function TodoItem({ todoItem, onDelete, onUpdate }) {
    const [todo, setTodo] = useState({});
    const { id, content, color } = todoItem;

    useEffect(() => {
        setTodo(todoItem);
    }, []);

    const onChange = (e) => {
        setTodo({
            ...todo,
            content: e.target.value,
        });
        onUpdate(id, e.target.value);
    };

    return (
        <div class="todoItemContainer">
            <InputGroup className="mb-3">
                <Form.Control
                    value={content}
                    onChange={onChange}
                    style={{ backgroundColor: color }}
                ></Form.Control>
                <Button
                    variant="danger"
                    id="button-addon2"
                    onClick={() => onDelete(id)}
                >
                    삭제
                </Button>
            </InputGroup>
        </div>
    );
}
