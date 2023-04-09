import data from './MovieData.json';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function MovieList() {
  const movies = data.MovieData;

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Category</th>
          <th>Title</th>
          <th>Year</th>
          <th>Director</th>
          <th>Rating</th>
          <th>Edited</th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie, index) => (
          <tr key={index}>
            <td>{movie.Category}</td>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
            <td>{movie.Director}</td>
            <td>{movie.Rating}</td>
            <td>{movie.Edited}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MovieList;
