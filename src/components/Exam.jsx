import { useReducer } from "react";

// reducer : 변환기
// 상태를 실제로 변환시키는 변환기 역할
function reducer(state, action) {
    // console.log(state, action);
    if (action.type === "INCREASE"){
        return state + action.data;
        // return ++state;
        // return state++;
    }
    else if (action.type === "DECREASE"){
        return state - action.data;
        // return ++state;
        // return state++;
    }

}


const Exam = () => {
    // dispatch : 발송하다
    // 상태변화가 있어야 한다는 사실을 알리는, 발송하는 함수
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        // 인수로는 상태가 어떻게 변하기 원하는지
        // 액션 객체
        dispatch({
            type : "INCREASE",
            data : 1,

        });
    }

    const onClickMinus = () => {
        // 인수로는 상태가 어떻게 변하기 원하는지
        // 액션 객체
        dispatch({
            type : "DECREASE",
            data : 1,

        });
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickMinus}>-</button>
        </div>
    );
};

export default Exam;
