import { Route, Routes } from "react-router-dom";
import "./App.css";
import SideBar from "./SideBar";
import Home from "../practice3/Home";
import Hsy from "./Hsy";
import Ksy from "./Ksy";
import Cjw from "./cjw";

export default function App(props){
    return (<>
    <div style={ {display: 'flex', justifyContent:'flex-start'}}>
        <div >
            <SideBar></SideBar>
        </div>
        <div id="main">
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/hsy" element={<Hsy/>}></Route>
                <Route path="/ksy" element={<Ksy/>}></Route>
                <Route path="/cjw" element={<Cjw/>}></Route>
            </Routes>
            
        </div>
    </div>
        
    </>)
}