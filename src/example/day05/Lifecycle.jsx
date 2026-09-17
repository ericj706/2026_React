import { useEffect, useState } from "react"

function MoveBox(props){
    const [position, setPosition] = useState(props.initPosition); // position 상태/변수에 50대입
    const [Count, setCount] = useState(1);  // leftCount 상태/변수에 1대입

    const boxStyle = {  // css left속성값을 상태/변수 값으로 사용중
        backgroundColor : 'red', position: 'relative', textAlign: 'center',
        width:'100px', height:'100px', margin: '10px', lineHeight: '100px',
        left: `${position}px`
    };
    const moveLeft = () => {
        setPosition( () => position-20);
        setCount( () => Count-1);
    }
    const moveRight = () => {
        setPosition( position +20 )
        setCount( Count+1);
    }
    // *********** 생명주기 ***********
    useEffect( () => {
        console.log('useEffect 실행 --> 마운트')
        return () => {
            console.log('useEffect 실행 --> 언마운트')
        }
    //}); // 의존성 배열 생략시: (렌더링될때) 1.최초 마운트 2. 업데이트
    // }, [] ); // 빈 배열: 렌더링만,Effect실행x
    }, [Count] ); // 특정변수 배열: 변수값만 업데이트 
    console.log('return 실행 --> 렌더링')
    return( <>
        <div style={boxStyle}>{Count}</div>
        <button onClick={moveLeft}>좌측이동</button>
        <button onClick={moveRight}>우측이동</button>
    </>)
}

export default function Lifecycle(props){
    return(<>
        <MoveBox initPosition={150}></MoveBox>
    </>)
}