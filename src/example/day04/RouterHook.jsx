import { useLocation, useSearchParams } from "react-router-dom";

export default function RouterHook(props){
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    // searchParams.get('변수명');
    const mode = searchParams.get('mode');
    const pageNum = searchParams.get('pageNum');

    // mode의 속성을 변경하는 함수
    const changeMode = () => {
        const nextMode = (mode === 'list') ? 'view' : 'list'; // mode값이 list이면 view 아니면 list
        setSearchParams({
            mode : nextMode, pageNum
        });
    }
    // 페이지 번호를 증가시키는 함수
    const nextPage = () => {
        let pageTemp = (pageNum === null || isNaN(pageNum))
                        ? 1 : parseInt(pageNum) + 1; // 페이지 번호가 null이면 1 아니면 +1
        setSearchParams({
            mode, pageNum : pageTemp
        });
    }
    const prevPage = () => {
        let pageTemp = (pageNum === null || isNaN(pageNum))
                        ? 1 : parseInt(pageNum) - 1; // 페이지 번호가 null이면 1 아니면 -1
        setSearchParams ({
            mode, pageNum : pageTemp
        });
    }
    return (<>
        <h2> 라우터관련훅 </h2>
        <div>
            <ul>
                <li> URL : {location.pathname} </li>
                <li> 쿼리스트링 : {location.search} </li>
                <li> mode : {mode} </li>
                <li> pageNum : {pageNum} </li>
            </ul>
            <button onClick={changeMode}> 모드변경 </button>
            <button onClick={prevPage}> 이전페이지 </button>
            <button onClick={nextPage}> 다음페이지 </button>
        </div>
    </>)
}