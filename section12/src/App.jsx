import { useState } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기 작성 페이지
// 3. "/diary" : 상세 조회 페이지
function App() {
    const [count, setCount] = useState(0);

    const nav = useNavigate();

    const onClickButton = () => {
        nav("/new");
    }

    return (
        <>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/new"}>new</Link>
                <Link to={"/diary"}>Diary</Link>
            </div>
            <button onClick={onClickButton}>New Page 이동</button>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/new" element={<New />} />
                <Route path="/diary/:id" element={<Diary />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
