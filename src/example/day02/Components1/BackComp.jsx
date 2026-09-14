const BackComp = ({onMyEvent2}) => {
    return (<>
        <li><a href="/" onClick={ (event)=>{
            event.preventDefault();
            onMyEvent2('백엔드 클릭됨(자식전달)');
        }}>백엔드</a>
        </li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
            <li>Spring</li>
        </ul>
    </>)
}
export default BackComp;

/*
    a 마크업 사용시 주의할점, 104p
        - a 마크업은 HTTP GET 통신 마크업이라서 깜빡거림
        - 리액트는 CSR(HTTP통신1번) 이라서 깜빡거림 제거
        onClick = { (e)=>{e.preventDefault(); }}
    콜백함수 형식
        const plus = (x,y) => {return x+y}
        const cal = (func) => {
            console.log(func(3,4) )}
*/