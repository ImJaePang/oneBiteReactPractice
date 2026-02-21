import { useReducer, useRef, createContext } from "react";
import "./App.css";
import { Routes, Route, useNavigate, data } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

const mockData = [
    {
        id: 1,
        createdDate: new Date().getTime(),
        emotionId: 1,
        content: "1번 일기 내용",
    },
    {
        id: 2,
        createdDate: new Date().getTime(),
        emotionId: 2,
        content: "2번 일기 내용",
    },
];

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((item) =>
                String(item.id) === String(action.data.id) ? action.data : item
            );
        case "DELETE":
            return state.filter(
                (item) => String(item.id) !== String(action.id)
            );
        default:
            return state;
    }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
    const idRef = useRef(3);

    const [data, dispatch] = useReducer(reducer, mockData);

    const onCreate = (createdDate, emotionId, content) => {
        // 새로운 일기를 추가하는 기능
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    const onUpdate = (id, createdDate, emotionId, content) => {
        // 새로운 일기를 추가하는 기능
        dispatch({
            type: "UPDATE",
            data: {
                id,
                createdDate,
                emotionId,
                content,
            },
        });
    };

    const onDelete = (id) => {
        // 새로운 일기를 추가하는 기능
        dispatch({
            type: "DELETE",
            id,
        });
    };

    return (
        <>
            <DiaryStateContext.Provider value={data}>
                <DiaryDispatchContext.Provider value={{onCreate, onDelete, onUpdate,}}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/new" element={<New />} />
                        <Route path="/diary/:id" element={<Diary />} />
                        <Route path="/edit/:id" element={<Edit />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </DiaryDispatchContext.Provider>
            </DiaryStateContext.Provider>
        </>
    );
}

export default App;
