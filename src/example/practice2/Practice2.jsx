/* 조건1: 성명, 연락처, 나이 3가지의 정보들을 입력받아 
상태에 저장하며 여러명의 정보들을 저장 후 하단에 출력하시오.
조건2: 클릭한 정보 행에 삭제 버튼 클릭시 화면에서 
해당 정보 삭제 하기. */

import { useState } from "react"


export default function Practice3(){
    const [name, setName] =useState('');  // 일반변수가 아닌 상태변수 사용 (const 또는 let)
    const [phone, setPhone] =useState('');    
    const [age, setAge] =useState(0);
    const [members, setMembers] = useState([]); // 빈 배열 생성
    
    // 등록함수
    const post = () =>{
        const obj = {name,phone,age} // 입력받은 값 3개를 객체로 만든다
        // 배열에 만든 객체 저장
        members.push(obj);
        // 랜더링을 위한 members sette에 스프레드 연산자로 배열복사
        setMembers( [...members])
    }

    // 삭제함수
    const remove = (index) => {
        members.splice(index,1)
        setMembers([...members]) // 렌더링 위한 members setter에 스프레드연산자로 배열 가져오
    } 

    return (<>
        <h1> 전화번호부 </h1>
        <input placeholder="성명" value={name} onChange={(e) => {setName(e.target.value)}}/>
        <input placeholder="연락처 (예: 010-1234-5678" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
        <input placeholder="나이" value={age} onChange={(e) => {setAge(e.target.value)}}/>
        <button onClick={post}> 등록 </button>
        <br/>
        {   
            members.map( (m , index) => {
                return (<> 
                    <div>
                        <span> 성명: {m.name} </span>
                        <span> 연락처: {m.phone} </span>
                        <span> 나이: {m.age} </span>
                        {index}
                        <button onClick={remove}>삭제</button>
                    </div>
                </>)
            })
        }
        <div> 총 인원 : {members.length}명</div>
        
    </>)

}
