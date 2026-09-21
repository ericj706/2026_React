import { useEffect, useRef } from "react";

export default function UseRefExam2(props){
    const passRef1 = useRef();
    const passRef2 = useRef();
    useEffect( ()=> {
        console.log('passRef',passRef1,passRef2);
        passRef1.current.focus();
    }, []);
    const checkPassword = () => {
        if (!passRef1.current.value || passRef2.current.value == '') {
            alert('비밀번호를 입력해주세요');
            passRef1.current.focus();
            return;
        }

        if (passRef1.current.value === passRef2.current.value) {
            alert('비밀번호 확인이 완료되었습니다.');
        } else {
            alert('비밀번호가 일치하지 않는 경우 처리');
            passRef1.current.value = '';
            passRef2.current.value = '';
            passRef1.current.focus();
        }
    }

    return (<>
        <h2>useRef 사용하기2</h2>
        <form>
            패스워드1: <input type="text" ref={passRef1} name="pass1"/> <br/>
            패스워드2: <input type="text" ref={passRef2} name="pass2"/> <br/>
            <button type="button" onClick={checkPassword}>패스워드 확인</button>
        </form>
    </>);
}
/* 
    입력상자내 입력받은 값 제어
    1. useState
        const [title, setTitle ] = useState ('');
        <input value = { title } onChange = { (e) => setTitle (e.target.value); }} />
    
    2. useRef
        const titleRef = useRef('')
        <input ref = {titleRef} />

    3. const formRef = useRef();
    <form ref = {formRef}> </form>
*/