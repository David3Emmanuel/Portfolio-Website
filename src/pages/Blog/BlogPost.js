import { useParams } from "react-router-dom";
import "./BlogPost.css";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../../utils/firebase";
import Link from "../../UI/Link";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export default function BlogPost() {
    const id = useParams().id;
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return <div className="blog-post">
        {loading && <h2>Loading...</h2>}
        {!loading && post === null && <>
            <h2>This page does not exist...</h2>
            <Link to="/blog">See all posts</Link>
        </>}
        {post !== null && <>
            <h1>{post.title}</h1>
            <div className="blog-info">
                <i>By {post.author}</i>
                <blockquote>{post.description}</blockquote>
            </div>
            <ReactMarkdown>{post.content}</ReactMarkdown>
        </>}
    </div>
}