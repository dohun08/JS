import { useState } from "react";
import './toggle.css';

export default function Toggle(){
    let toggle = false;
    const [toggle1, setToggle]= useState("");
    return(
        <div className="toggle-container">
            <h1 className="toggle-header">토글이 <span >{toggle1 ? "켜짐" : "꺼짐"}</span> 상태입니다.</h1>
            <button className="toggle-button" type="button" onClick={()=>{setToggle(!toggle1)}}>토글</button>
        </div>

    )
}