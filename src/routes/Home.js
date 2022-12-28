import { useEffect, useState } from 'react';
import Movie from '../components/Movie'; // ../ 무엇?
import style from './Home.module.css';

console.time('실행시간Home');
function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?sort_by=rating`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={style.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={style.movies}>
          {movies.map((movie) => (
            <Movie
              key={movie.id} //key값 매우중요
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
              year={movie.year}
              rating={movie.rating}
              download={movie.torrents}
            />
          ))}
        </div>
      )}
    </div>
  );
}
console.timeEnd('실행시간Home');
export default Home;
