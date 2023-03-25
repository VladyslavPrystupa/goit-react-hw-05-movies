import { Link, useLocation } from 'react-router-dom';

export const ListOfMovies = ({ list }) => {
  const location = useLocation();

  return (
    <ul>
      {list.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
