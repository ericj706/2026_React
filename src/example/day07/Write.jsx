import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function Write(props){
    const navigate = useNavigate();
    const 등록함수 = async (e)=>{
        e.preventDefault();
        console.log(e.target)
        const obj = {
            name:e.target.writer.value,
            subject:e.target.title.value,
            content:e.target.contents.value
        }
        const response = await axios.post("http://localhost:8080/api",obj);
        const data = response.data;
        if(data==true){navigate("/list")}
    }

    return(<>
        <div>
            <Link to= "/list">목록</Link>
            <form onSubmit={(e)=>{등록함수(e);}}>
                작성자 : <input name="writer"/><br/>
                제목 : <input name="title"/><br/>
                내용 : <textarea name="contents" rows="3"></textarea><br/>
                <input type="submit" value="작성" />
            </form>
        </div>
    </>)
}
