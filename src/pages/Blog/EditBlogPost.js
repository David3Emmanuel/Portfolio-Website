import { Link, useParams } from "react-router-dom"
import NewBlogPost from "./NewBlogPost";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../../utils/firebase";
import { onValue, ref } from "firebase/database";

export default function EditBlogPost() {
    const id = useParams().id;
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState(null);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const postRef = ref(db, "posts/" + id);
        onValue(postRef, snapshot => {
            setPost(snapshot.val())
        })
    }, [id])

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user !== null) {
                const userRef = ref(db, "users/"+user.uid);
                onValue(userRef, snapshot => {
                    const username = snapshot.val().username;
                    if (post !== null && username === post.author) setAuthorized(true);
                    setLoading(false);
                })
            }
        })
    }, [post])

    if (loading) return <h1>Loading....</h1>
    else if (!authorized) return <h2>
        <p>You are not authorized to edit this post</p>
        <Link to="/blog">Go back to blog</Link>
    </h2>
    else if (post === null) return <div>
        <h2>Something went wrong</h2>
        <Link to="/blog">Go back to blog</Link>
    </div>
    else
        return <NewBlogPost originalPost={post} />
}