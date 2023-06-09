import PropTypes from 'prop-types';

export const MovieCast = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <img
            src={
              profile_path &&
              `https://image.tmdb.org/t/p/original${profile_path}`
            }
            alt={name}
            height="150"
          />
          <h2>{name}</h2>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

MovieCast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
      character: PropTypes.string.isRequired,
    })
  ),
};
