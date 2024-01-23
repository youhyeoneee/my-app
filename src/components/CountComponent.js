import React, { useEffect, useState } from "react";

export default function CountComponent() {
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count+1);
    }

    useEffect(() => {
        console.log("데이터받아오기! 이 함수는 한번만 실행됩니다.");
        return () => {
            console.log("메모리를 잡아먹으면 리소스를 해제하는 함수를 return해주어야 합니다.")
        }
    }, [])

    // count가 바뀔때마다 다시 호출할게용 
    useEffect(() => {
        console.log(`카운트가 증가할 때마다 실행 \n -count: ${count}`)
    }, [count])
    return (
        <div>
            <div>{count}</div>
            <button onClick={addCount}>1 증가</button>
        </div>
    )
}