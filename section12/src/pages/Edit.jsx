import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import Button from "../components/Button";

const Edit = () => {
  const params = useParams();
//   console.log(params);
  const nav = useNavigate();

  const [curDiaryItem, setCurDiaryItem] = useState();

  const { onCreate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);

  //   const item = data.find((item)=>{
  //     console.log("items : ", data);
  //     if (String(item.id) === String(params.id)){
  //         return item;
  //     }
  //   });
  //   console.log("item : , ", item);

  const onSubmit = (input) => {
    onUpdate(
      params.id,
      input.createdDate.getTime(),
      input.emotionId,
      input.content,
    );
    nav("/", { replace: true });
  };

  const { onDelete } = useContext(DiaryDispatchContext);
  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까? 다시 복구되지 않아요!")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };

  useEffect(()=>{
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id),
    );

    if (!currentDiaryItem){
        window.alert("존재하지 않는 일기입니다.");
        nav("/", {replace : true});
    }
    // return currentDiaryItem;
    setCurDiaryItem(currentDiaryItem);
  },[params.id, data]);
//   const currentDiaryItem = getCurrentDiaryItem();

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={<Button text={"< 뒤로 가기"} onClick={() => nav(-1)} />}
        rightChild={
          <Button
            text={"삭제하기"}
            type={"NEGATIVE"}
            onClick={() => onClickDelete()}
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
