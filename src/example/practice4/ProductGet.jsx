import axios from "axios";
import { useEffect, useState } from "react";
import "./Body.css";

export default function ProductGet(){

    const [products, setProducts] = useState([]);

    const productPrint = async() => {

        const response = await axios.get(
            "https://wellness-exclusion-surfing-advisory.trycloudflare.com/api/products"
        );

        console.log(response.data);
        setProducts(response.data);
    };

    useEffect(() => {
        productPrint();
    }, []);

    return(<>
        <div className="cjwContainer">
            <div className="profileCard">
                <h2>[제품 전체 조회]</h2>
                <table>
                    <thead >
                        <tr>
                            <th>bno</th>
                            <th>카테고리</th>
                            <th>상품명</th>
                            <th>가격</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products.map((product) => {
                                return(
                                    <tr key={product.bno}>
                                        <td>{product.bno}</td>
                                        <td>{product.categoryname}</td>
                                        <td>{product.name}</td>
                                        <td>{product.price.toLocaleString()}원</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        
    </>);
}