import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import {getStringedDate} from "../util/get-Stringed-date";
import usePageTitle from "../hooks/usePageTitle";

const Diary = () => {

    const params = useParams();
    const curDiaryItem = useDiary(params.id);
    // console.log(curDiaryItem);

    usePageTitle(`${params.id}번 일기`);

    const nav = useNavigate();

    if (!curDiaryItem){
        return <div>로딩중...</div>
    }

    const {createdDate, emotionId, content} = curDiaryItem;

    return <div>
        <Header
            title={`${getStringedDate(new Date(createdDate))} 기록`}
            leftChild={<Button text={"< 뒤로가기"} onClick={()=>{nav(-1)}} />}
            rightChild={<Button text={"수정하기"} onClick={()=>(nav(`/edit/${params.id}`))}/>}
        />

        <Viewer emotionId={emotionId} content={content}/>
        </div>;
}

export default Diary;
