import React, { useEffect, useRef, useState } from "react";

export default function TodoItem(props) {

    return (
        <div>{props.index} {props.text}</div>
    )
}