import data from './MovieData.json';
const movie = data.MovieData;

function MovieList() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Category</td>
            <td>Title</td>
            <td>Year</td>
            <td>Director</td>
            <td>Rating</td>
            <td>Edited</td>
          </tr>
        </thead>

        <tbody>
          {movie.map((m) => (
            <tr>
              <td>{m.Category}</td>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieList;