import "./NewBlogPost.css";
import PostInput from "../../UI/PostInput";
import useNewBlog from "./useNewBlog";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { useEffect } from "react";

export default function NewBlogPost({originalPost}) {
    const { post, dispatch, changePostContent, createPost } = useNewBlog(originalPost);

    useEffect(() => {
        changePostContent();
    }, [changePostContent])

    return <form className="new-blogpost" onSubmit={createPost}>
        <PostInput name="TITLE" label="Title:" value={post.title} dispatch={dispatch} />
        <PostInput name="DESCRIPTION" label="Description:" value={post.description} dispatch={dispatch} />
        <div className="content-container">
            <div>
                <h2>NEW POST....</h2>
                <textarea
                    className="content"
                    placeholder="Enter post..."
                    onInput={changePostContent}
                    value={post.content}
                ></textarea>
            </div>
            <div>
                <h2>Preview</h2>
                <ReactMarkdown className="content preview">{post.content}</ReactMarkdown>
            </div>
        </div>
        <button className="post-button" onClick={createPost}>POST</button>
    </form>
}