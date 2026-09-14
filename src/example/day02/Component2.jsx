// 구조분해
// const {name,age} = {name:'유재석',age:40}
// console.log(name,age);
// const [name,setName] = ['유재석', function setter(){}]

import { useState } from "react";

// console.log(name); setName();
let 전역변수 = 0;
export default function Component2(props){  
    let 지역변수 = 0; // 함수안에 변수
    // 1. 전역변수,지역변수 증가함수 : 내부적으로는 증가O, 화면으로는 증가X(return 1번)
    const 증가함수1 = () => {전역변수++; 지역변수++; console.log(전역변수,지역변수);}
    // 2. useState 함수 이용한 새로고침(함수재호출 ==> 함수 return)
    const [count, setCount] = useState(0);
    // set상태변수명(새로운값) : 자동으로 현재 함수/컴포넌트 재실행 -> return재실행, 지역변수(함수내 선언된 변수)는 초기화
    const 증가함수2 = () => {setCount(count+1);}    

    // 3. 수박 요소 1개를 갖는 배열 초기값으로 상태변수 선언
    const [array, setArray]= useState(['수박']);
    // 배열내 '사과' 요소 추가하여 setXXX 배열을 대입했다.
    const 증가함수3 = () => { array.push('사과'); setArray([...array])}
    // [...기존배열명] 또는 {...기존객체명}, 새로운 주소값생성

    return(<>
        <h3>상태관리</h3>
        <h4>전역변수: {전역변수} , 지역변수: {지역변수}</h4>
        <button onClick={증가함수1}>버튼1</button>
        <h4>상태변수: {count}</h4>
        <button onClick={증가함수2}>버튼2</button>
        <h4>상태변수: {array} </h4>
        <button onClick={증가함수3}>버튼3</button>
    </>)
}