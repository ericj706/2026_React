function FrontComp(props){
    return(<>
        {/*<a>태그에 onClick이벤트 핸들러 사용, 클릭시 프로스로 받은 onMyEvent1() 함수 실행 */}
        <li><a href = '/' onClick ={()=>{
            props.onMyEvent1();
            }}> 프론트엔드 </a></li>
        <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>jQuery</li>
        </ul>
    </>)
}

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
function Component6(){
return (<>
        <h2>React Event</h2>
        <ol>
            <FrontComp onMyEvent1={() => {
                alert('프론트엔드 클릭됨(부모전달)');
            }}></FrontComp>
            /* 프롭스 inMyEvent1에 이름 없는 화살표 함수를 전달 */
            <BackComp onMyEvent2={(msg) => {
                alert(msg);
            }}></BackComp>
        </ol>
    </>)
}

export default Component6

