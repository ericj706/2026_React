import { Route, Routes } from "react-router-dom";
import "./index.css";
import NotFound from "./NotFound";
import List from "./List";
import Write from "./write";

export default function App(){
    return (<>
        <Routes>

            <Route path="/list" element={<List/>}></Route>
            <Route path="/write" element={<Write/>}></Route>

            {/* path ="*" : 와일드카드 (모든주소) */}
            <Route path="*" element ={<NotFound/>}></Route>

        </Routes>
    </>)
}