import "./TodoItem.css";

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

export default TodoItem;
