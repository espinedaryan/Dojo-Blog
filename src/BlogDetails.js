import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

function BlogDetails() {
    const { id } = useParams();
    const { data:blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="blog-details">
            {error && <div className='error-message'>{error}</div>}
            {isPending && <div className='loading'>Loading...</div>}
            {blog && (
                <article className="blog-preview">
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <h4>{blog.body}</h4>
                        <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;