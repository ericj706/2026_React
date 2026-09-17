import axios from "axios";
import { useEffect, useState } from "react"
import "./Body.css";

function CategoriesPrint(props){
    const [categories, setCategories] = useState ( [] );

    useEffect( async function() {
        const response = await axios.get("https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/categories");
        setCategories(response.data);
    }, []);

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

            </div>
        </div>
    </>)
}