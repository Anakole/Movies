import { Link } from 'react-router-dom';

export const TrendsList = ({ trends }) => {
  return (
    <ul>
      {trends.map(({ id, original_title, poster_path }) => (
        <li key={id}>
          <Link to={`movies/${id}`} state={{ from: '/' }}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={original_title}
            />
            <h2>{original_title}</h2>
          </Link>
        </li>
      ))}
    </ul>
  );
};
