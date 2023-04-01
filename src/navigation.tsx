import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className="Menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Podcast">Podcast</Link>
        </li>
        <li>
          <Link to="/MovieList">Movies</Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;