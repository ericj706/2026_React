import axios from "axios";
import { useEffect, useState } from "react";

export default function ProductPost(){

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [cno, setCno] = useState("");

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
    </div>
    );
}