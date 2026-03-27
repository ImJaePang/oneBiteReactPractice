import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import { use, useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
import Viewer from "../components/Viewer";

const Diary = () => {

    const params = useParams();
    const DiaryItems = useContext(DiaryStateContext);

    const [curDiaryItem, setCurDiaryItem] = useState({
        createdDate : "yyyy-mm-dd"
    });

    useEffect(()=>{
        DiaryItems.find((item)=>{
            if(item.id === params.id){
                console.log("item : ", item);
                setCurDiaryItem({
                    ...item,
                    createdDate : new Date(item.createdDate),
                })
            }
        });
    }, [params.id]);

    const nav = useNavigate();

    

    return <div>
        <Header
            title={`${curDiaryItem.createdDate} yyyy-mm-dd 기록`}
            leftChild={<Button text={"< 뒤로가기"} onClick={()=>{nav(-1)}} />}
            rightChild={<Button text={"수정하기"}/>}
        />

        <Viewer/>
        </div>;
}

export default Diary;
