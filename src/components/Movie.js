import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from './Movie.module.css';
//href태그를 쓰면 해당링크로 이동하지만 페이지가 전체 재실행된다. 하지만 Link를 쓰면 페이지가 재실행되지 않는다.=>Link 컴포넌트는 다른페이지로 이동해도 새로고침을 안할수 있게끔 해준다
function Movie({ id, coverImg, title, year, rating, summary, genres }) {
  return (
    <div className={style.movie}>
      <Link to={`/movie/${id}`}>
        <img className={style.movie_img} src={coverImg} alt={title} />
      </Link>
      <h2>
        <div className={style.movie_title}>
          {title}({year})
        </div>
        <div>⭐ {rating}/10</div>
        <ul className={style.movie_genres}>
          {genres && genres.map((g) => <li key={g}>{g}</li>)}
        </ul>
      </h2>
      {/* <p className={style.movie_summary}>
        <span>Summary : </span>
        {summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}
      </p> */}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
