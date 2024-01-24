import React, {useEffect, useRef, useState} from "react";
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function TodoItem(props) {
    const [todo, setTodo] = useState({});
    const {id, text, color} = props.todo;

    useEffect(()=>{
        setTodo(props.todo)
    }, [])

    const onChange = (e) => {
        setTodo({
            ...todo,
            text: e.target.value
        });
        props.updateTodo(id, e.target.value);
    };

    return (
        <div class="todoItemContainer">
            <InputGroup className="mb-3">
                <Form.Control value={text} onChange={onChange} style={{backgroundColor: color}}></Form.Control>
                <Button variant="danger" id="button-addon2" onClick={() => props.deleteTodo(id)}>삭제</Button>
            </InputGroup>
        </div>
    )
}