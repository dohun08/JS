import { useState } from "react";
export default function 이름컴포넌트(){
    const [name, setName] = useState('소마고');
    const [show, setShow] = useState(true);


    return(
        <div>
            <h1>{show ? `현재이름 : ${name}` : "이름이 없습니다"}</h1>
            <button onClick={()=>setShow(!show)} type="button">{show ? "숨기기" : "보이기"}</button>
        </div>
    )
}