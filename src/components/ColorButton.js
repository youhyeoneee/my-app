import React, { useEffect, useRef, useState } from "react";
import TodoItem from "./TodoItem";

export default function ColorButton(prop) {

    return (
        <button className={prop.color}/>
    )
}