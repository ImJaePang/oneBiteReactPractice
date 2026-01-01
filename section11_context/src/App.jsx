import "./App.css";
import {
    useState,
    useRef,
    useReducer,
    useCallback,
    createContext,
} from "react";
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

function reducer(state, action) {
    switch (action.type) {
        case "CREATE":
            return [action.data, ...state];
        case "UPDATE":
            return state.map((todo) =>
                todo.id === action.data
                    ? { ...todo, isDone: !todo.isDone }
                    : todo
            );
        case "DELETE":
            return state.filter((todo) => todo.id !== action.data);
        default:
            return state;
    }
}

export const TodoContext = createContext();
console.log("TodoContext : ", TodoContext);

function App() {
    let idRef = useRef(3);

    // const [todos, setTodos] = useState(mockData);
    const [todos, dispatch] = useReducer(reducer, mockData);

    const onCreate = useCallback((content) => {
        dispatch({
            type: "CREATE",
            data: {
                id: idRef.current++,
                isDone: false,
                content: content,
                date: new Date().getTime(),
            },
        });
    }, []);

    const onUpdate = useCallback((targetId) => {
        dispatch({
            type: "UPDATE",
            data: targetId,
        });
    }, []);

    // useCallback 사용
    // const func = useCallback(()=>{},[]);

    const onDelete = useCallback((targetId) => {
        dispatch({
            type: "DELETE",
            data: targetId,
        });
    }, []);

    return (
        <div className="App">
            {/* <Exam/> */}

            <Header />
            <TodoContext.Provider
                value={{
                    todos,
                    onCreate,
                    onUpdate,
                    onDelete,
                }}
            >
                <Editor />
                <List  />
            </TodoContext.Provider>
        </div>
    );
}

export default App;
