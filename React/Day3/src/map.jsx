import React from 'react';

function Map(){
    const myMap = ["apple", "banana", "orange"];
    let foo = ["one", "two", "three"]
    let [red, yellow, green] = foo;
    console.log(red);
    console.log(yellow);
    console.log(green);
    return(
        <>
            <h1>map 연습하기</h1>
            {myMap.map((item)=>{
                return <li>{item}</li>;
            })}
        </>
    )
};

export default Map;