import { useParams } from "react-router-dom";
import "./BlogPost.css";

export default function BlogPost() {
    const DUMMY_POSTS = [
        {
            "id": "js-over-python",
            "title": "Why I Chose JS over Python",
            "description": "Reasons I moved from Python development to Web development",
            "author": "David Emmanuel",
            "content": "Creating UI is easier with javascript and it's also easier to share - you can just send someone a link. Even though I know from experience python is way faster"
        }
    ]

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