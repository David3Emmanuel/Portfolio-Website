import Link from "../../UI/Link";
import Card from "../../shared/Card";
import "./BlogPage.css";

export default function BlogPage() {
    const DUMMY_POSTS = []

    return <div className="blog">
        {DUMMY_POSTS.length > 0 && <h1>Recent Posts</h1>}
        {DUMMY_POSTS.length === 0 && <h2 className="empty">No blog posts yet...</h2>}
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