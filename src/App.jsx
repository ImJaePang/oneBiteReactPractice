import "./App.css";
import { useState, useRef } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import Exam from "./components/Exam";

const mockData = [
    {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "노래 연습하기",
        date: new Date().getTime(),
    },
];

function App() {
    let idRef = useRef(3);

    const [todos, setTodos] = useState(mockData);

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        };

        setTodos([newTodo, ...todos]);
    };

    const onUpdate = (targetId) => {
        // todos State의 값중
        // targetId와 일치하는 id를 갖는 투두 아이템의 isDone을 변경

        // console.log("targetId : ", targetId);

        setTodos(
            todos.map((todo) =>
                // console.log("todo.id :", todo.id);
                // console.log("...todo : ", {...todo});
                todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const onDelete = (targetId) => {
        // todos State의 값중
        // targetId와 일치하는 id를 갖는 투두 아이템을 삭제

        setTodos(todos.filter((todo) => todo.id !== targetId));
    };

    return (
        <div className="App">
            <Exam/>




            
            {/* <Header />
            <Editor onCreate={onCreate} />
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} /> */}

        </div>
    );
}

export default App;
