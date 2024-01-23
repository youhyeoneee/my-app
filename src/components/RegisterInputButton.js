import React, {useEffect, useRef, useState} from 'react'

export default function FocusInputButton({text}) {

    const inputRef = useRef();

    const focusInput = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <button onClick={focusInput}> 입력하러 가기 </button>
            <div style={{height:2000}}></div>
            <input ref={inputRef} type="text"/>
            <div style={{height:2000}}></div>

        </div>
    )
}