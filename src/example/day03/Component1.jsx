import '../../index.css'
import logo from '../../assets/sungkyulLogo.jpg';
export default function Component1(props){
    // [3] css객체방식의 css적용
    const myStyle = {
        color:'white', backgroundColor:"DodgerBlue",
        padding: "10px", fontFamily:"Verdana"
    }
    const iwidth = {maxWidth: '300px'}
    return (<>
        <h2> 리액트 스타일 </h2>    
        <ol>
            {/* [2] 인라인방식의 css적용, {key:"value"}*/}
            <li style={ {color:"red"} }>프론트엔드</li>
            <ul>
                {/* [4] 이미지 삽입하는 3가지 방법 */}
                <li><img src="/img/sungkyulLogo.jpg" style={iwidth}/></li>
                <li><img src={logo} style={iwidth}/></li>
                <li><img src='http//nakja.co.kr/images/reacts.png' style={iwidth}/></li>
            </ul>
            <li className="backEnd">백엔드</li>
            <ul>
                {/* [1] 전통방식의 css 적용 */}
                <li id="backEndSub"> java </li> 
                <li class="warnings"> oracle </li>
                <li> jsp </li>
            </ul>
        </ol>
    </>)
}