import { useParams } from "react-router-dom";
import "./BlogPost.css";

export default function BlogPost() {
    const DUMMY_POSTS = []

    const id = useParams().id
    const post = DUMMY_POSTS.find(post => post.id === id)
    return <div className="blog-post">
        <h1>{post.title}</h1>
        <div className="blog-info">
            <i>By {post.author}</i>
            <blockquote>{post.description}</blockquote>
        </div>
        <p>{post.content}</p>
    </div>
}