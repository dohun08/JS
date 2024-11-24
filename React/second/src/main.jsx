import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function PropsComponent(props){
    return(
        <div>
            <h1>안녕하세요, {props.name}님 프롭스 컴포넌트 입니다^^</h1>
            <h2>{props.count}번 클릭했습니다..</h2>
        </div>
    )
}

function Hello({name, count}){
    return(
        <>
            <h1>Hello, {name} World!</h1>
            <h2>{count}번째 방문입니다.</h2>
        </>
    );
}

createRoot(document.getElementById('root')).render(
    <>
       <App></App>
    </>

)
function PropsComponent3({name, count}){
    return(
        <div>
            <h1>반갑습니다, {name}님 프롭스 컴포넌트입니다!</h1>
            <h2>{count}회 방문하셨네요.</h2>
        </div>
    )
}

function PropsComponent2({name, count}){
    return(
        <div>
            <h1>안녕하세요, {name}님 프롭스 컴포넌트 입니다^^</h1>
            <h2>{count}번 클릭했습니다..</h2>
        </div>
    )
}