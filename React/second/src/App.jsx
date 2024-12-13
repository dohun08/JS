import Count from "./count.jsx";
import Toggle from "./toggle.jsx";
import 이름컴포넌트 from './이름컴포넌트.jsx';
import Coment from "./comment.jsx";
import {comments} from './CommentList.jsx';
function App() {

  return (
      <>
        <Count />
        <Toggle />
        <이름컴포넌트 />
          {comments.map((item, index)=>{

              return(
                  <div>
                      <Coment name={item.name} comment={item.comment} />
                  </div>
              )
          })}
      </>
  )
}

export default App
