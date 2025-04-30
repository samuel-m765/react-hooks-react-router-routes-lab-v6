import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

const movies = [
  {
    id: 1,
    title: "Doctor Strange",
    time: 115,
    genres: ["Action", "Adventure", "Fantasy"]
  },
  {
    id: 2,
    title: "Trolls",
    time: 92,
    genres: ["Animation", "Comedy", "Family"]
  }
];

export default function Movie() {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === parseInt(id, 10));

  if (!movie) {
    return (
      <>
        <NavBar />
        <h2>Movie not found</h2>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <h1>{movie.title}</h1>
      <p>Duration: {movie.time} minutes</p>
      <div>
        <h3>Genres:</h3>
        {movie.genres.map((genre) => (
          <span key={genre} style={{ marginRight: "8px" }}>
            {genre}
          </span>
        ))}
      </div>
    </>
  );
}
