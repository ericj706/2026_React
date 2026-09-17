import { Link, NavLink } from "react-router-dom";
import "./App.css";

export default function SideBar(props) {
    return (
        <div id="sidebar">
            <h3 className="sideTitle">1조 팀 프로젝트</h3>
            <ul className="list">
                <li>
                    <NavLink to="/categorypost" className={({ isActive }) => isActive ? "active" : ""}>
                        카테고리등록
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/categoryget" className={({ isActive }) => isActive ? "active" : ""}>
                        카테고리전체출력
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/productpost" className={({ isActive }) => isActive ? "active" : ""}>
                        제품등록
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/productget" className={({ isActive }) => isActive ? "active" : ""}>
                        제품전체출력
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}