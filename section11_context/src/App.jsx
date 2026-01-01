import "./App.css";
import {
    useState,
    useRef,
    useReducer,
    useCallback,
    createContext,
    useMemo,
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

// export const TodoContext = createContext();
// console.log("TodoContext : ", TodoContext);

export const TodoStateContext = createContext();
export const TodoDispatchContext = createContext();

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

    const memoizedDispatch = useMemo(() => {
        return { onCreate, onUpdate, onDelete };
    }, []);

    return (
        <div className="App">
            {/* <Exam/> */}

            <Header />

            {/* TodoStateContext 변경될 수 있는 값, TodoDispatchContext 변경되지 않는 값 */}
            <TodoStateContext.Provider value={todos}>
                <TodoDispatchContext.Provider value={memoizedDispatch}>
                    <Editor />
                    <List />
                </TodoDispatchContext.Provider>
            </TodoStateContext.Provider>
        </div>
    );
}

export default App;
