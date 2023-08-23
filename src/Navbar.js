import { Link } from 'react-router-dom';
const Navbar = (props) => {
    const { title } = props;

    return (
        <nav className="navbar">
            <h1>{title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" className='new-blog'>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;