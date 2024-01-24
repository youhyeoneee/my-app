import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

export default function ColorButton(prop) {

    const onClick = () => {
        prop.changeColor(prop.color);
    }
    return (
        <button className={prop.color} onClick={onClick}/>
    )
}