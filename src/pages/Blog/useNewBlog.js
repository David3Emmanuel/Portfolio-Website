import { useEffect, useReducer, useState } from "react";
import { onValue, ref, set } from "firebase/database";
import { auth, db } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";

export default function useNewBlog(originalPost) {
    const navigate = useNavigate();
    const [username, setUsername] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user === null) navigate("/login?continue=/blog/create&message=Sign+in+to+create+post");
            else {
                const userRef = ref(db, "users/" + user.uid);
                onValue(userRef, snapshot => {
                    setUsername(snapshot.val().username)
                })
            }
        })
    }, [navigate])

    function createPost(e) {
        e.preventDefault();
        console.log(post)
        const id = post.title.toLowerCase().replace(/\s/g, '-');
        const newPostRef = ref(db, "posts/" + id);
        set(newPostRef, {...post, id: id, author: username, date: Date.now()});
        navigate("/blog/" + id);
    }

    function reducer(state, action) {
        if (action.type === "TITLE") return { ...state, title: action.value };
        if (action.type === "DESCRIPTION") return { ...state, description: action.value };
        if (action.type === "CONTENT") return { ...state, content: action.value };
        return state;
    }
    const [post, dispatch] = useReducer(reducer, originalPost || {
        title: "",
        id: "",
        author: "",
        description: "",
        date: new Date(),
        content: "**bold**  \n*italic*  \n- Bullet 1  \n- Bullet 2  \n\n[Link](https://www.a.com)  \n![Image](/favicon.ico)" })

    function changePostContent(e) {
        const height = document.getElementsByClassName("preview")[0].scrollHeight;
        const contents = document.getElementsByClassName("content");
        for (var i=0; i<contents.length; i++) {
            contents[i].style.height = height + "px"; 
        };
        if (e) dispatch({ type: "CONTENT", value: e.target.value })
    }

    return { post, dispatch, changePostContent, createPost };
}