const BackComp = ({onMyEvent2})=>{
    return (<>
        <li><a href="/" onClick={(event) => {
            event.preventDefault();
            onMyEvent2('백엔드 클릭됨(자식전달)');
        }}>백엔드</a></li>
        <ul>
            <li>Java</li>
            <li>Oracle</li>
            <li>JSP</li>
        </ul>
    </>)
}
function Component7(){
return (<>
        <h2>React Event</h2>
        <ol>
            // 프롭스 inMyEvent1에 이름 없는 화살표 함수를 전달
            <BackComp onMyEvent2={(msg) => {
                alert(msg);
            }}></BackComp>
        </ol>
    </>)
}
export default Component7