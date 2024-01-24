import React, { useEffect, useRef, useState } from "react";

export default function TodoItem(props) {

    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
        props.updateTodo(text, e.target.value);
    };

    useEffect(()=>{
        setText(props.text)
    }, [props.text])

    return (
        <div class="todoItemContainer">
            <input value={text} onChange={onChange}></input>
            <button onClick={() => props.deleteTodo(text)}>삭제</button>
        </div>
    )
}