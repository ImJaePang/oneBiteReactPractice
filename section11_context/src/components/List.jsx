import "./List.css";
import TodoItem from "./todoItem";
import { useState, useMemo, useContext } from "react";
import { TodoContext } from "../App";

const List = () => {
    const {todos} = useContext(TodoContext);

    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };

    const getFilteredData = () => {
        if (search === "") {
            return todos;
        }

        console.log(search);

        return todos.filter((todo) =>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    };

    const filteredTodos = getFilteredData();

    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
        console.log("getAnalizedData 실행");
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=>todo.isDone === true).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount : totalCount,
            doneCount : doneCount,
            notDoneCount : notDoneCount,
        }
        
    }, [todos]);

    // const {totalCount, doneCount, notDoneCount} = getAnalizedData();

    return (
        <div className="List">
            <h4>Todo List🌱</h4>

            <div>
                <div>total : {totalCount}</div>
                <div>done : {doneCount}</div>
                <div>notDone : {notDoneCount}</div>
            </div>

            <input
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력해주세요"
            />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    // console.log(todo);
                    // if (!todo) return null;
                    return <TodoItem key={todo.id} {...todo} />;
                    // return <TodoItem onUpdate={onUpdate} {...todo} />;
                })}
            </div>
        </div>
    );
};

export default List;
