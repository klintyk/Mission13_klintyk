import Table from 'react-bootstrap/Table';
import {Movie} from './types/movie'
import {useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

function MovieList() {
  const[MovieData, setMovieData] = useState<Movie[]>([]);

  useEffect(()=>{
 const fetchMovie = async () =>{
    const rsp = await fetch('https://localhost:7121/api/movie');
    const temp = await rsp.json();
    setMovieData(temp);
  }
  fetchMovie();
  },[]);
 
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
        {MovieData.map((m) => (
          <tr key={m.movieId}>
            <td>{m.category}</td>
            <td>{m.title}</td>
            <td>{m.year}</td>
            <td>{m.director}</td>
            <td>{m.rating}</td>
            <td>{m.edited}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default MovieList;
