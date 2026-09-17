import { useEffect, useState } from "react";
import axios from "axios";

 function RandomUser(props){
    // API응답 결과 저장하는 함수
    const [myJSON, setMyJSON] = useState({ results:[] });

    useEffect(async function(){
        const response = await axios.get("https://api.randomuser.me?results=10")
        const data = response.data;
        setMyJSON(data);
    },[]);

    const trTag = myJSON.results.map( (data)=>{
        return(
            <tr key={data.login.md5}>
                <td><img src={data.picture.thumbnail}/></td>
                <td>
                    <a href="/" onClick={ (e)=> {
                        e.preventDefault();
                        props.onProfile(data);
                    }}>{data.login.username}</a>
                </td>
                <td>{data.name.title} {data.name.first} {data.name.last}</td>
                <td>{data.nat}</td>
                <td>{data.email}</td>
            </tr>
        );
    });
    return (
        <div >
            <table border="5">
                <thead>
                    <tr>
                        <th>사진</th><th>로그인</th><th>이름</th>
                        <th>국가</th><th>이메일</th>
                    </tr>
                </thead>
                <tbody>{trTag}</tbody>
            </table>
        </div>
    );
}

export default function ExternalApiFetcher(){
    return(<>
        <h2>외부서버통신</h2>
        <RandomUser onProfile={(sData)=>{
            console.log(sData);
            let info = `전화번호: ${sData.phone}
            성별:${sData.gender}
            username:${sData.username}
            password:${sData.password}`;
            alert(info);
        }}></RandomUser>
    </>);
}