import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import Button from "../components/Button";

const Edit = () => {

    const params = useParams();
    console.log(params);
    const nav = useNavigate();

    const {onCreate} = useContext(DiaryDispatchContext);
    const onSubmit = (input) => {
        onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
        nav("/", {replace : true});
    };

    const {onDelete} = useContext(DiaryDispatchContext)
    const onClickDeleteButton = () => {
        onDelete(params.id);
    }
    
    return <div>
        <Header title={"수정하기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={()=>nav(-1)}/>} 
        rightChild={<Button text={"삭제하기"} onClick={onClickDeleteButton}/>} 
        />
        <Editor onSubmit={onSubmit} />
    </div>;
}

export default Edit;
