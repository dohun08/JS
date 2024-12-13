import './comment.css';
import { useState } from "react";

export default function Comment({name, comment}){
    const [like, setLike] = useState(0);
    const [unlike, setUnlike] = useState(0);
    return(
        <div className={"wrapper"}>
            <img className={"image"}  src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png" alt={"profile"} />
            <div className={"contentontainer"}>
                <span className={"nameText"}>{name}</span>
                <div>
                    <span onClick={()=>{setLike(like + 1)}}> 👍🏾 : {like}</span>
                    <span onClick={()=>{setUnlike(unlike+1)}}> 👎🏾 : {unlike} </span>
                </div>
                <span className={"commentText"}>{comment}</span>
            </div>
        </div>
    )
}