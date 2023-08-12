import { useNavigate, useParams } from "react-router-dom";
import "./BlogPost.css";
import { useEffect, useState } from "react";
import { onValue, ref, remove } from "firebase/database";
import { auth, db } from "../../utils/firebase";
import Link from "../../UI/Link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { onAuthStateChanged } from "firebase/auth";

export default function BlogPost() {
    const navigate = useNavigate();
    const id = useParams().id;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);

    useEffect(() => {
        const postsRef = ref(db, "posts");
        onValue(postsRef, snapshot => {
            snapshot.forEach(postSnapshot => {
                const data = postSnapshot.val();
                if (data.id === id) setPost(data);
            })
            setLoading(false);
        })
    }, [id]);

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user !== null) {
                const userRef = ref(db, "users/" + user.uid);
                onValue(userRef, snapshot => {
                    setUsername(snapshot.val().username)
                })
            }
        })
    }, []);

    function handleDelete() {
        remove(ref(db, "posts/"+id));
        navigate("/blog");
    }

    return <div className="blog-post">
        {loading && <h2>Loading...</h2>}
        {!loading && post === null && <>
            <h2>This page does not exist...</h2>
            <Link to="/blog">See all posts</Link>
        </>}
        {post !== null && <div className="blog-content">
            <h1>{post.title}</h1>
            <div className="blog-info">
                <i>{new Date(post.date).toDateString()} by {post.author}</i>
                <p className="description">{post.description}</p>
            </div>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>}
        {post !== null && username === post.author && <div className="admin-actions">
            <Link className="material-icons" to="edit">edit</Link>
            <button className="material-icons" onClick={handleDelete}>delete</button>
        </div>}
    </div>
}