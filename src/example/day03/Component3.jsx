import { useState } from "react"

// Top HTML
const TopComp = ({MyData}) => {
    return (<>
        <ol>
            <li> 프론트엔드 </li>
            <ul>
                {MyData.front.map((item,i) => <li key={i}>{item}</li>)}
            </ul>
            <li> 백엔드 </li>
            <ul>
                {MyData.back.map((item,i)=> <li key={i}>{item}</li>)}
            </ul>
        </ol>
    </>)
}
// 부모
export default function Component3(props){
    const [MyData, setMyData] = useState({
        front: ['HTML5', 'CSS3', 'JavaScript','jQuery'],
        back:['Java','Oracle','JSP','SpringBoot']
    });
    const addFront = () => {
        MyData.front.push('React');
        setMyData(MyData);
    }
    const addBack = () => {
        const newBack = [...MyData.back, 'Node.js'];
        // MyData의 복사본을 만든 후 변경 (리렌더링)
        const newMyData = {...MyData, back: newBack};
        setMyData(newMyData);
    }

    // 기능 HTML
    return (<>
        <h2>React-Module</h2>
        <TopComp MyData={MyData} />
        <button type="'button" onClick={addFront}> 프론트추가 </button>
        <button type="button" onClick={addBack}> 백엔드추가 </button>
    </>)
}

