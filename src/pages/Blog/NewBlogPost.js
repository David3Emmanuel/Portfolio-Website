import { useReducer } from "react";
import "./NewBlogPost.css";
import { ref, set } from "firebase/database";
import { db } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

export default function NewBlogPost() {
    const navigate = useNavigate();

    function createPost() {
        const newPostRef = ref(db, "posts/"+post.id);
        set(newPostRef, post);
        navigate("/blog");
    }

    function reducer(state, action) {
        if (action.type === "TITLE") return {...state, title:action.event.target.value};
        if (action.type === "ID") return {...state, id:action.event.target.value};
        if (action.type === "AUTHOR") return {...state, author:action.event.target.value};
        if (action.type === "DESCRIPTION") return {...state, description:action.event.target.value};
        if (action.type === "CONTENT") return {...state, content:action.event.target.value};
        return { ...state };
    }
    const [post, dispatch] = useReducer(reducer, { title: "", id: "", author: "", description: "", content: "" })

    function changePostContent(e) {
        const textarea = e.target;
        textarea.style.height = textarea.scrollHeight + "px";
        dispatch({type: "CONTENT", event: e})
    }

    return <form className="new-blogpost">
        <PostInput name="TITLE" label="Title:" value={post.title} dispatch={dispatch} />
        <PostInput name="ID" label="Short Id:" value={post.id} dispatch={dispatch} />
        <PostInput name="AUTHOR" label="Author:" value={post.author} dispatch={dispatch} />
        <PostInput name="DESCRIPTION" label="Description:" value={post.description} dispatch={dispatch} />
        <h2>NEW POST....</h2>
        <textarea onInput={changePostContent} value={post.content}>52</textarea>
        <button onClick={createPost}>POST</button>
    </form>
}

function PostInput({ name, label, value, dispatch }) {
    return <div className="post-input">
        <p>{label}</p>
        <input type="text" onInput={e => dispatch({ type: name, event: e })} value={value} />
    </div>
}