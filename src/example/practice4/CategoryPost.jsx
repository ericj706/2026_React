import axios from "axios";
import { useEffect, useState } from "react"
import "./Body.css";

export default function CategoryPost(props){
    const [cname,setCname] = useState('');
    const [parkings,setParkings] = useState([]);
    // 등록 버튼 클릭 / Form 제출 시 실행되는 함수
    const saveData = async (e) => {
        e.preventDefault();
        const response = await axios.post(
            "https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/categories",{name: cname}
        );
        setCname('');
        console.log("등록 성공 응답:", response.data);
        alert("카테고리가 등록되었습니다!");
    };

    const viewApi = async () => {
        try {
            const response = await axios.get("http://localhost:8080/parking");
            console.log("API 응답:", response.data);
            // 💡 핵심: response.data 내부의 data 배열에 접근
            if (response.data && response.data.data) {
                setParkings(response.data.data); 
            } else if (Array.isArray(response.data)) {
                setParkings(response.data);
            }
        } catch (error) {
            console.error("주차장 API 조회 실패:", error);
        }
    };
    useEffect( ()=>{
        viewApi();
    }, [] );
    
    return (
        <div className="card-container">
            <h2 className="card-title"> [카테고리 등록]</h2>
            
            <div className="table-box">
                {/* 기능 수행 행만 남긴 단일 테이블 구조 */}
                <div className="table-row last-row">
                    <div className="label-cell">기능 수행</div>
                    <div className="content-cell">
                        <div className="form-group">
                            <input 
                                className="custom-input"
                                placeholder="새 카테고리명" 
                                value={cname}
                                onChange={(e) => setCname(e.target.value)}
                            />
                            <button className="custom-btn" onClick={saveData}>등록</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <table border="1" style={{ width: "550px", borderCollapse: "collapse" }} >
                    <thead >
                        <tr >
                            <th>구분</th><th>주차장명</th> 
                            <th>위치</th><th>주차면수</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(parkings) && parkings.map( (parking) => {
                            return(
                                <tr key={parking.주차장명}>
                                    <td>{parking.구분}</td>
                                    <td>{parking.주차장명}</td>
                                    <td>{parking.위치}</td> 
                                    <td>{parking.주차면수}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}