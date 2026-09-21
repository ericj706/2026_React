import { useState } from "react";
import ArticleList from "./Article/ArticleList";
import NavList from "./Navigation/NavList";
import ArticleView from "./Article/ArticleView";
import NavWrite from "./Navigation/NavWrite";
import ArticleWrite from "./Article/ArticleWrite";
import NavView from "./Navigation/NavView";
import NavEdit from "./navigation/NavEdit";
import ArticleEdit from "./article/ArticleEdit";

function Header(props){
    return(
        <header>
            <h2>{props.title}</h2>
        </header>
    );
}

export default function App(props){
    const [boardData, setBoardData] = useState([
    {no:1, title:'오늘은 React공부하는날', writer:'낙짜쌤', date:'2025-01-01', 
      contents:'React를 \n뽀개봅시당'},
    {no:2, title:'어제는 Javascript공부해씸', writer:'유겸쌤', date:'2025-02-02', 
      contents:'Javascript는 할게 너무 많아요'},
    {no:3, title:'내일은 Project해야징', writer:'미르쌤', date:'2025-03-03', 
      contents:'Project는 뭘 만들어볼까?'},
    ]);

    const [mode,setMode]= useState('list');
    const [no,setNo] = useState(null);
    const[nextNo, setNextNo] = useState(4);

    let articleComp,navComp,titleVar,selectRow;
    if (mode==='list') { 
        titleVar = "게시판목록";
        navComp = (
            <NavList onChangeMode={ () =>{
                setMode('write');
            }}></NavList>
        );
        articleComp = (
            <ArticleList boardData={boardData}
            onChangeMode={ (no)=>{
                setMode('view');
                setNo(no);
            }}></ArticleList>
        );
    }
    else if (mode==='view') {
        titleVar = '게시판 열람';
        navComp = 
            <NavView onChangeMode={(pmode)=>{
                setMode(pmode);
            }}></NavView>
            for (let i = 0; i < boardData.length; i++) {
                if (no===boardData[i].no) {
                    selectRow = boardData[i];
                }
            }
        articleComp = <ArticleView selectRow = {selectRow}></ArticleView>;
    }
    else if (mode==='write') {
        titleVar = '게시판 쓰기';
        navComp = (<NavWrite onChangeMode = {()=>{
                setMode('list');
            }}></NavWrite>);
        articleComp = <ArticleWrite writeAction = {(t,w,c) => {
            let nowDate = new Date().toISOString().slice(0,10);
            let addBoardData = {no:nextNo, title:t, writer:w, contents:c, date:nowDate};
            let copyBoardData = [...boardData]; // 상태 boardData로 복사본 생성
            copyBoardData.push(addBoardData);   // 복사본 배열에 새로운 객체 추가
            setBoardData(copyBoardData);   // 상태변경
            setNextNo(nextNo+1); // 일련번호 1증가
            setMode('list');    // 리스트로 화면전환    
        }}></ArticleWrite>;
    }
    else if (mode==='delete') {
        let newBoardData = [];
        for (let i = 0; i < boardData.length; i++) {
            if(no!== boardData[i].no){
                newBoardData.push(boardData[i]);
            }
        }
        setBoardData(newBoardData);
        setMode('list');
    }
    else if (mode==='edit') {
        titleVar='게시판 수정';
        navComp = <NavEdit onChangeMode={ () => {
            setMode('list');
        }}
        onBack ={ () => {
            setMode('view');
        }}></NavEdit>
        for (let i = 0; i < boardData.length; i++) {
            if (no===boardData[i].no) {
                selectRow = boardData[i];
            }
        }
        articleComp = <ArticleEdit selectRow={selectRow}
        editAction = {(t,w,c)=>{
            let editBoardData = {no:no, title:t, writer:w, contents:c, date:selectRow.date};
            let copyBoardData = [...boardData];
            for (let i = 0; i < copyBoardData.length; i++) {
                if (copyBoardData[i].no===no) {
                    copyBoardData[i] = editBoardData;
                    break;
                }
            }
            setBoardData(copyBoardData);
            setMode('view');
        }}></ArticleEdit>
    }
    return(<>
        <Header title={titleVar}></Header>
        {navComp}
        {articleComp}
    </>)
}

