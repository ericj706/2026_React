function FrontComp(props){
    const liRows = [];  // 배열
    for (let i = 0; i < props.propData1.length; i++) {
        // 부모로부터 전달받은 props내에 propData1 반복
        liRows.push(
            <li key = {i}>{props.propData1[i]}</li>  // 반복되는 요소를 렌더링할때 key필요
            // 배열명.push(값);  // 배열내 값 추가
        );
    }
    return(<>
        <li>{props.frTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}
// 원래 props 객체인데 구조분해하여 propData2 변수와 baTitle 변수로 각 저장
const BackComp = ({propData2, baTitle})=>{
    const liRows = [];  // 배열
    let keyCnt = 0;
    for(let row of propData2){
        // 부모로부터 전달받은 props내 propData1 반복
        liRows.push(
            <li key = {keyCnt++}>{row}</li>
        );  // 배열명.push(값); // 배열내 값 추가
    }
    return(<>
        <li>{baTitle}</li>
        <ul>
            {liRows}
        </ul>
    </>)
}
function Component4(){
    // 추후에 연동할 백엔드와 통신 AXIOS
    const frontData = ['HTML5','CSS3','JavaScript','jQuery'];
    const backData = ['Java','Oracle','JSP','Spring Boot'];
    return(<>
        <div>
            <h2>React Props</h2>
            <ol>
                <FrontComp propData1 = {frontData} frTitle='프론트엔드'></FrontComp>
                <BackComp propData2={backData} baTitle="백엔드"/>
            </ol>
        </div>
    </>)
}
export default Component4

