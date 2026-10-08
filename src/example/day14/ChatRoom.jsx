import { useEffect, useRef, useState } from "react";
import { Client } from "@stomp/stompjs";

// ***** 웹소캣/STOMP 설치 ***** npm
export default function ChatRoom(props){
    // useState란? 상태(값) 저장하고 변경시 해당 컴포넌트/함수 재실행/재호출 훅/라이브러리
    // const[변수명,set변수명] = useState(초기값);
    const[message,setMessage] = useState('');   // 입력받은 메시지
    const [messages, setMessages] = useState([]); // 메시지들, 서버로부터 받은 메시지들
    
    // useRef란? 상태(값)저장하고 다른 상태와 상관없이 새로고침/초기화 방지 => 상태 유지
    const clientRef = useRef(null); // 지역변수vs상태변수vs참조(useRef)변수


    useEffect( ()=>{
        //const client = new Client({brokerURL: "접속할백엔드브로커주소", onConnect : 접속성공이벤트})
        const client = new Client({
            brokerURL: "ws://localhost:8080/ws-chat", // 스프링의 'registerStompEndpoints'정의 주소와 일치
            onConnect : () => { // 접속 성공하면 실행되는 이벤트/함수
                client.subscribe("/sub/chat/room/general", (message)=>{ // 스프링의 'configureMessageBroker' 정의 주소와 일치
                    messages.push(JSON.parse(message.body)); // message.body가 메시지본문
                    console.log(JSON.parse(message.body))
                    setMessages([...messages]); // 렌더링
                })
            }
        })
        // stomp 실행, client.activate()
        client.activate()
        // client 객체 다른 함수(전송함수) 사용하기 위해
        clientRef.current = client;
        // 만약에 컴포넌트 사라지면 (생명주기) , stomp종료, cient.deactivate();
        return ()=>{client.deactivate();}
    }, [])
    

    // 전송시 백엔드에게 메시지 보내기
    const sendMessage = (e) => {
        console.log("메시지보내기");
        // 만약에 현재 소캣객체가 없으면 실패
        if (clientRef.current == null) {
            return;
        }
        // 존재하면 메시지 전송, client.publish()
        const info = {
            type : 'TALK', roomId: "general", sender: "user", 
            content: message, date: new Date().toISOString()
        }
        // 발행주소 : 스프링의 configureMessageBroker 정의된 발행주소 + @MessageMappin정의된 주소
        clientRef.current.publish({destination: "/pub/chat/message" ,
            body: JSON.stringify(info), 
        })
    }


    return(<>
        <h3>채팅방</h3>
        {
            messages.map( (msg)=>{
            <div>{msg.sender} : {msg.content}</div> })
        }


        <input value={message} onChange={(e)=> setMessage(e.target.value)}/>
        <button type="button" onClick={sendMessage}> 전송 </button>

    </>)
}