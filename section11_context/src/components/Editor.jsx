import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoContext } from "../App";

const Editor = () => {

    const {onCreate} = useContext(TodoContext);
    // console.log(data);

    const [content, setContent] = useState("");

    const contentRef = useRef();

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }

        onCreate(content);
        setContent("");
    };

    const onChangeContent = (e) => {
        // console.log(e.target.value);
        setContent(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13){
            onSubmit();
        }
    };

    return (
        <div className="Editor">
            <input
                ref={contentRef}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
                value={content}
                placeholder="새로운 Todo..."
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};

export default Editor;
