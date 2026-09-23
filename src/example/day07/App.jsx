import { Route, Routes } from "react-router-dom";
import "./index.css";
import NotFound from "./NotFound";

export default function App(){
    return (<>
        <Routes>
            {/* path ="*" : 와일드카드 (모든주소) */}
            <Route path="*" element ={<NotFound/>}></Route>
            
        </Routes>
    </>)
}