import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({isDone, content, date, id, onUpdate, onDelete}) => {

    const onChangeCheckBox = () => {
        onUpdate(id);
        // console.log(onUpdate);
        // console.log(id);
    }

    const onClickDelete = () =>{
        onDelete(id);
    }

    

    return <div className="TodoItem">
        <input readOnly type={"checkbox"} onChange={onChangeCheckBox} checked={isDone} />
        <div className="content">{content}</div>
        <div className="date">{new Date(date).toLocaleDateString()}</div>
        <button onClick={onClickDelete}>삭제</button>
    </div>;
};

// 고차 컴포넌트(HOC)
// export default memo(TodoItem,(prevProps, nextProps)=>{
//     // true면 바뀌지 않음
//     // false면 바뀜 -> 리렌더링
//     if (prevProps.id !== nextProps.id) return false;
//     if (prevProps.isDone !== nextProps.isDone) return false;
//     if (prevProps.date !== nextProps.date) return false;
//     if (prevProps.content !== nextProps.content) return false;
//     return true;
// });

export default memo(TodoItem);