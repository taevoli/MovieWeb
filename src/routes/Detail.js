import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';
console.time('실행시간Detail');
function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState({});
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();

    setMovies(json.data.movie);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className={style.container}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={style.detail_movies}>
          <div>
            <img className={style.detail_img} src={movies.medium_cover_image} />
          </div>
          <h1 className={style.detail_title}>
            {movies.title}{' '}
            <div className={style.detail_rating}>⭐ {movies.rating}/10</div>
          </h1>
          <a href={movies.url} className={style.detail_url}>
            Detail Information Link🔎
          </a>
          <p className={style.detail_summary}>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
              Summary🔔:
            </div>
            {movies.description_intro}
          </p>
        </div>
      )}
    </div>
  );
}
console.timeEnd('실행시간Detail');
export default Detail;
