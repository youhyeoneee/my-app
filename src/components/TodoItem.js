import React, {useEffect, useRef, useState} from "react";

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

    // useEffect(() => {
    //     setTodo({
    //         ...todo
    //     })
    // }, [props.todo])

    return (
        <div class="todoItemContainer">
            <input value={text} onChange={onChange} style={{backgroundColor: color}}></input>
            <button onClick={() => props.deleteTodo(id)}>삭제</button>
        </div>
    )
}