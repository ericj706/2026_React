import { NavLink } from "react-router-dom";

export default function TopNavi(){
    return(
        <div>
            <NavLink to={"/use-ref1"}> useRef1 </NavLink>
            <NavLink to={"/use-ref2"}> useRef2 </NavLink>
        </div>
    )
}