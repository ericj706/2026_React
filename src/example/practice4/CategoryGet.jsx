import axios from "axios";
import { useEffect, useState } from "react"
import "./Body.css";

function CategoriesPrint(props){
    const [categories, setCategories] = useState ( [] );

    // useEffect( async function() {
    //     const response = await axios.get("https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/categories");
    //     setCategories(response.data);
    // }, []);
    return (
        <div className="categoryBox">
            <div className="categoryHeader">
                <span>카테고리명</span>
                <span>번호</span>
            </div>
            {categories.map( (category) => {
                return (
                    <div className="categoryItem" key={category.cno}>
                        <span className="categoryName">{category.name}</span>
                        <span className="categoryNo">{category.cno}</span>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default function CategoryGet(props){
    const [powerPlants, setPowerPlants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const powerPlantPrint = async () => {
            try {
                const response = await axios.get("http://localhost:8080/day08");
                const list = Array.isArray(response.data) ? response.data : response.data.data;

                if (!Array.isArray(list)) throw new Error("배열아님");
                setPowerPlants(list);
            } catch (error) {
                console.error(error);
                setError("출력실패");
            } finally {
                setLoading(false);
            }
        };
        powerPlantPrint();
    }, []);

    return(<>
        <div className="cjwContainer">
            <div className="profileCard">
                <h2>
                    [카테고리 전체 조회]
                </h2>
                <div className="profileRow">
                    <div className="profileTitle">
                        학과
                    </div>
                    <div className="profileContent">
                        산업경영공학과
                    </div>
                </div>

                <div className="profileRow">
                    <div className="profileTitle">
                        자기소개
                    </div>
                    <div className="profileContent">
                        카테고리 전체 조회 기능을 담당할 것 입니다.
                    </div>
                </div>

                <div className="profileRow">
                    <div className="profileTitle">
                        카테고리 목록
                    </div>
                    <div className="profileContent">
                        <CategoriesPrint />
                    </div>
                </div>

                <div style={{ marginTop: "30px" }}>
                    <h3>발전소 목록</h3>

                    {loading ? (
                        <p>불러오는 중입니다.</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : powerPlants.length === 0 ? (
                        <p>조회된 데이터가 없습니다.</p>
                    ) : (
                        <div style={{ overflowX: "auto" }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>번호</th>
                                        <th>발전소명</th>
                                        <th>설비구분</th>
                                        <th>사용연료</th>
                                        <th>설비용량(MW)</th>
                                        <th>위치</th>
                                        <th>주연료</th>
                                        <th>준공일자</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {powerPlants.map((plant) => (
                                        <tr key={plant["번호"]}>
                                            <td>{plant["번호"]}</td>
                                            <td>{plant["발전소명"]}</td>
                                            <td>{plant["설비구분"]}</td>
                                            <td>{plant["사용연료"]}</td>
                                            <td>{plant["설비용량(MW)"]}</td>
                                            <td>{plant["위치"]}</td>
                                            <td>{plant["주연료"]}</td>
                                            <td>{plant["준공일자"]}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>)
}