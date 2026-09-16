import { Link, NavLink } from "react-router-dom";
import "./App.css";

export default function SideBar(props){
    return (<>
        <div id="sidebar" >
            <h3 class="sideTitle"> 최정우와 아이들 </h3>
            < NavLink to = "/" class = "home"> Home </NavLink>
            <ul class = "team">
                팀원 소개
                <li><Link to="/hsy">황소연</Link></li>
                <li><Link to="/cjw">최정우</Link></li>
                <li><Link to="/ksy">김승연</Link></li>
            </ul>
        </div>
    </>)
}