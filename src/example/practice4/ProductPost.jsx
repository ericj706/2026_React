import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductPost(){

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [cno, setCno] = useState("");
    const [data, setData] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/view')
            .then((re) => {
                setData(re.data);
            });
    }, []);

    // 카테고리 목록
    const [categories, setCategories] = useState([]);

    // 카테고리 전체 조회
    useEffect(() => {

        const categoryPrint = async() => {

            const response = await axios.get(
                "https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/categories"
            );

            console.log(response.data);

            setCategories(response.data);
        };
        categoryPrint();

    }, []);


    // 제품 등록
    const productAdd = async() => {

        const obj = {
            name: name,
            price: Number(price),
            cno: Number(cno)
        };

        const response = await axios.post(
            "https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/products",
            obj
        );

        console.log(response.data);

        alert("제품 등록 성공");

        setName("");
        setPrice("");
        setCno("");
    };
    if (!data || !data.data) return null;

    const list = data.data;

    return (
    <div className="card-container">
        <h2 className="card-title">제품 등록</h2>

        <div className="table-box">
            {/* 1행: 제품명 */}
            <div className="table-row">
                <div className="label-cell">제품명</div>
                <div className="content-cell">
                    <input
                        className="custom-input"
                        type="text"
                        placeholder="제품명을 입력하세요."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
            </div>

            {/* 2행: 가격 */}
            <div className="table-row">
                <div className="label-cell">가격</div>
                <div className="content-cell">
                    <input
                        className="custom-input"
                        type="number"
                        placeholder="가격을 입력하세요."
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>
            </div>

            {/* 3행: 카테고리 */}
            <div className="table-row">
                <div className="label-cell">카테고리</div>
                <div className="content-cell">
                    <select
                        className="custom-select"
                        value={cno}
                        onChange={(e) => setCno(e.target.value)}
                    >
                        <option value="">카테고리를 선택하세요.</option>
                        {categories.map((category) => (
                            <option key={category.cno} value={category.cno}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* 4행: 등록 버튼 */}
            <div className="table-row last-row">
                <div className="label-cell">기능 수행</div>
                <div className="content-cell">
                    <button className="custom-btn" type="button" onClick={productAdd}>
                        제품 등록
                    </button>
                </div>
            </div>
        </div>
        <div>
            <h3 className='mainTitle'>안양 생필품 가격동향</h3>
            <table border="1">
                <thead>
                    <tr>
                        <th>품목</th>
                        <th>규격</th>
                        <th>당월평균(원)</th>
                        <th>전월평균(원)</th>
                        <th>증감률(%)</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index) => (
                        <tr key={index}>
                            <td>{item["품목"]}</td>
                            <td>{item["규격"]}</td>
                            <td>{item["당월평균"]}</td>
                            <td>{item["전월평균"]}</td>
                            <td>{item["증감"]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    );
}