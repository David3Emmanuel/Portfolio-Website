import Link from "../../UI/Link";
import Card from "../../shared/Card";
import "./BlogPage.css";

export default function BlogPage() {
    const DUMMY_POSTS = [
        {
            "id": "js-over-python",
            "title": "Why I Chose JS over Python",
            "description": "Reasons I moved from Python development to Web development",
            "author": "David Emmanuel",
            "content": "Creating UI is easier with javascript and it's also easier to share - just send someone the link. But I know python is way faster"
        }
    ]

    return <div className="blog">
        <h1>Recent Posts</h1>
        {DUMMY_POSTS.map((post, i) => {
            return <PostPreview key={i} {...post} />
        })}
    </div>
}

function PostPreview({ title, description, author, id }) {
    return <Link className="post-link" to={`/blog/${id}`}><Card className="post-preview">
        <h2>{title}</h2>
        <i>{author}</i>
        <p>{description}</p>
    </Card></Link>
}