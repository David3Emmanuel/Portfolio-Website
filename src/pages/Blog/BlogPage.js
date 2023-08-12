import { ref, onValue } from "firebase/database";
import { db } from "../../utils/firebase";

import Link from "../../UI/Link";
import Card from "../../shared/Card";
import "./BlogPage.css";
import { useEffect, useState } from "react";

export default function BlogPage() {
    const [posts, setPosts] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const postsRef = ref(db, "posts/");
        onValue(postsRef, snapshot => {
            const data = snapshot.val();
            setPosts(data || {});
            setLoading(false);
        })
    }, []);

    return <div className="blog">
        <Link to="/blog/create">New post...</Link>
        {loading && <h2 className="empty">Loading...</h2>}
        {Object.entries(posts).length > 0 && <h1>Recent Posts</h1>}
        {!loading && Object.entries(posts).length === 0 && <h2 className="empty">No blog posts yet...</h2>}
        {Object.entries(posts).map(([id, post]) => {
            return <PostPreview key={id} {...post} />
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