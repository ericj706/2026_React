import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./SideBar";
import CategoryPost from "./CategoryPost";
import ProductPost from "./ProductPost";
import ProductGet from "./ProductGet";
import CategoryGet from "./CategoryGet";


export default function App(props){
    return (<>
    <div style={ {display: 'flex', justifyContent:'flex-start'}}>
        <div >
            <SideBar></SideBar>
        </div>
        <div id="main">
            <Routes>
                <Route path="/categorypost" element={ <CategoryPost />} />
                <Route path="/categoryget" element={ <CategoryGet />} />
                <Route path="/productpost" element={ <ProductPost />} />
                <Route path="/productget" element={ <ProductGet />} />
            </Routes>
        </div>
    </div>
        
    </>)
}