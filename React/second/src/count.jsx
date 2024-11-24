import {useState} from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>Count</h1>
            <h2>{count}번 클릭했습니다</h2>
            <button type={"button"} onClick={() => setCount(count + 1)}>증가</button>
            <button type={"button"} onClick={() => setCount(count - 1)}>감소</button>
            <button type={"button"} onClick={() => setCount(0)}>리셋</button>
        </>

    );
}