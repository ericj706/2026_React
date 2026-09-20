import { useEffect, useState } from "react";
import axios from "axios";


export default function ProductGet() {

    const [dustList, setDustList] = useState([]);

    // 입력창에 작성 중인 값
    const [input, setInput] = useState("");

    // 실제 검색에 사용할 값
    const [keyword, setKeyword] = useState("");

    useEffect(() => {

        axios.get("http://localhost:8080/api/dust")
            .then((response) => {

                const items = response.data.response.body.items;

                setDustList(items);
            })
            .catch((error) => {
                console.log("axios 오류:", error);
            });

    }, []);

    // 조회 버튼 클릭
    const search = () => {
        setKeyword(input);
    };

    // 검색 결과
    const filteredList = dustList.filter((dust) => {

        if (keyword === "") {
            return true;
        }

        return (
            dust.districtName.includes(keyword) ||
            dust.moveName.includes(keyword)
        );
    });

    return (
        <div className="dust-page">

            <aside className="sidebar">

                <h2 className="sidebar-title">
                    OOO 팀 프로젝트
                </h2>

                <ul className="menu-list">
                    <li>홈 (공통)</li>
                    <li>팀원 소개</li>
                    <li className="active">
                        허유현 (미세먼지 경보)
                    </li>
                    <li>다른 팀원 기능 1</li>
                    <li>다른 팀원 기능 2</li>
                </ul>

            </aside>

            <main className="content">

                <div className="card">

                    <h1 className="main-title">
                        허유현 [미세먼지 경보 발령 현황]
                    </h1>

                    <div className="info-box">

                        <div className="info-row">
                            <div className="info-label">
                                API명
                            </div>

                            <div className="info-value">
                                한국환경공단 에어코리아 미세먼지 경보 발령 현황
                            </div>
                        </div>

                        <div className="info-row">
                            <div className="info-label">
                                기능
                            </div>

                            <div className="info-value">
                                지역 또는 권역을 검색하여
                                미세먼지 경보 발령 정보를 조회합니다.
                            </div>
                        </div>

                    </div>

                    {/* 검색 */}
                    <div className="search-box">

                        <input
                            type="text"
                            placeholder="지역명 또는 권역명 입력"
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                            }}
                        />

                        <button
                            type="button"
                            onClick={search}
                        >
                            조회
                        </button>

                    </div>

                    <div className="table-section">

                        <h3>기능 수행</h3>

                        <p className="data-count">
                            데이터 개수: {filteredList.length}
                        </p>

                        <table className="dust-table">

                            <thead>
                                <tr>
                                    <th>지역</th>
                                    <th>권역</th>
                                    <th>미세먼지 종류</th>
                                    <th>경보 상태</th>
                                    <th>발령 농도</th>
                                    <th>발령일</th>
                                    <th>발령시간</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    filteredList.map((dust) => {
                                        return (
                                            <tr key={dust.sn}>
                                                <td>{dust.districtName}</td>
                                                <td>{dust.moveName}</td>
                                                <td>{dust.itemCode}</td>
                                                <td>{dust.issueGbn}</td>
                                                <td>{dust.issueVal}</td>
                                                <td>{dust.issueDate}</td>
                                                <td>{dust.issueTime}</td>
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>

                        </table>

                    </div>

                </div>

            </main>

        </div>
    );
}