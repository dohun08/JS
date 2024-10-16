import { useState } from 'react'

function Count() {
  const [count, setCount] = useState(0)

  return (
      <>
          <h1>Counter</h1>
          <h1 className={"badge text-bg-secondary"}>{count}번 클릭했음</h1>
          <br />
          <button type="button" className="btn btn-outline-primary" onClick={()=>setCount(count+1)}>클릭</button>
          <input type={"button"} onClick={()=>setCount(count+1)} value={"+"} />
          <input type={"button"} onClick={()=>setCount(count-1)} value={"-"}/>
          <button type={"button"} onClick={()=>setCount(0)}>초기화</button>
      </>
  )
}

export default Count