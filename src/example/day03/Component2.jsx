import { useState } from "react"
// 입력폼 만들기
/*
    1. submit
*/
function WriteForm(props){
    return (<>
        <form onSubmit={ (event) => {
            console.log(event)
            event.preventDefault();
            let gubun = event.target.gubun.value;
            let title = event.target.title.value;
            // 부모컴포넌트로부터 전달받은 함수로부터 부모에게 전달
            props.writeAction(gubun,title);
        }}>
            <select name="gubun">
                <option value="front"> 프론트엔드 </option>
                <option value="back"> 백엔드 </option>
            </select>
            <input type="text" name="title" />
            <input type="submit" value="추가" />
        </form>
    </>)
}

// 부모 
export default function Component2(props){
    const [message, setMessage] = useState('폼값 검증 진행중');
    let 입력받은값 = '유재석';
    const [입력받은값2 , set입력받은값2] = useState('유재석');
    return(<>
        {/* value에 초기화 하면 재렌더링 없이 수정 불가능/불변성 */}
        <input value={입력받은값} /> 
        {/* value를 폼값으로 전송하는것을 반복문을 통해 재렌더링 */}
        <input value={입력받은값2} onChange={ (e)=> {set입력받은값2(e.target.value); }}/>   

        <WriteForm writeAction = { (gu,ti) => {
            if (gu !=='' && ti !=='') {
                let frmvalue = `검증완료 ${gu}, ${ti}`;
                setMessage(frmvalue);
            }else{
                alert('빈값');
            }
        }}/>
        <pre> {message} </pre>

    </>)  
}