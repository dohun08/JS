import './App.css'
import {useState} from "react";

function App() {
    const [value, setValue] = useState('');
    const handleClick = ()=>{
        setValue('');
    }
  return (
    <>
        <div>
            <input
                type={"text"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type={"button"} onClick={handleClick}>초기화</button>
        </div>
        {value ?
            <div className={"modal"}>
                <p>{value}</p>
            </div>
            : null}

    </>
  )
}

export default App
