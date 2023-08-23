import { Link } from 'react-router-dom';

function BlogList(props) {
    const { blogs, title } = props;

    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => {
                const { title, author, id } = blog;

                return (
                    <div className="blog-preview" key={id}>
                        <Link to={`/blogs/${id}`}>
                            <h2>{title}</h2>
                            <h4 className='text-cut'>{blog.body}</h4>
                            <p>Written by {author}</p>
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default BlogList;