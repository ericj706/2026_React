import { useState } from "react";
import FrontComp from "./Components2/FrontComp";
import BackComp from "./Components2/BackComp";

function Component3(){
    const [mode,setMode] = useState('both');
    const handleSetMode = (mode) => {
        setMode(mode);
    };
    let contents;
    if (mode === 'front') {
        contents = <>
            <FrontComp onSetMode={(mode)=>{
                setMode(mode);
            }}></FrontComp>
        </>
    }
    else if(mode === 'back'){
        contents = <>
            <BackComp setMode = {setMode} />
        </>
    }
    else{
        contents = <>
            <FrontComp onSetMode = {(mode) =>{
                handleSetMode(mode);
            }}></FrontComp>
            <BackComp setMode={handleSetMode} />
        </>
    }
    return (<>
        <h2><a href="/" onClick={(event)=>{
            event.preventDefault();
            setMode('both');
        }}>React-Module</a></h2>
        <ol>
            {contents}
        </ol>
    </>)
}
export default Component3