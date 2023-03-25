import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export const ListOfMovies = ({ list }) => {
  const location = useLocation();

  return (
    <ul>
      {list.map(({ title, id }) => (
        <li key={id}>
          <Link
            className="item-movie"
            to={`/movies/${id}`}
            state={{ from: location }}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

ListOfMovies.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
