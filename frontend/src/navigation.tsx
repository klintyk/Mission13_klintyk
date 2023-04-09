// import { Link } from 'react-router-dom';

// function Navigation() {
//   return (
//     <nav>
//       <ul className="Menu">
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/Podcast">Podcast</Link>
//         </li>
//         <li>
//           <Link to="/MovieList">Movies</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }
// export default Navigation;

import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/Podcast">Podcast</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/MovieList">Movies</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
