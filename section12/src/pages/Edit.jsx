import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Editor from "../components/Editor";
import { useContext, useEffect, useState } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";
import Button from "../components/Button";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  usePageTitle(`${params.id}번 일기 수정`);

  const { onUpdate } = useContext(DiaryDispatchContext);
  
  const curDiaryItem = useDiary(params.id);

  const onSubmit = (input) => {
    if (window.confirm("정말 수정하시겠습니까?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content,
      );
      nav("/", { replace: true });
    }
  };

  const { onDelete } = useContext(DiaryDispatchContext);
  const onClickDelete = () => {
    if (window.confirm("정말 삭제하시겠습니까? 다시 복구되지 않아요!")) {
      onDelete(params.id);
      nav("/", { replace: true });
    }
  };



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
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
};

export default Edit;
