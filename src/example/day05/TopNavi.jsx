import { NavLink } from "react-router-dom";

export default function TopNavi(props){
    return(<>
        <nav > 
            <NavLink to="/" style={{textDecoration:"none", color:"black"}}>생명주기</NavLink>&nbsp;
            <NavLink to="/local" style={{textDecoration:"none", color:"black"}}>내부통신</NavLink>&nbsp;
            <NavLink to="/external" style={{textDecoration:"none", color:"black"}}>외부통신</NavLink>
        </nav>
    </>)
}