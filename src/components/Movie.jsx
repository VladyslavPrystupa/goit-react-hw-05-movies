import PropTypes from 'prop-types';

export const Movie = ({
  movie: { poster_path, original_title, title, vote_average, overview, genres },
}) => {
  return (
    <>
      <div style={{ display: 'flex', gap: '30px' }}>
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={original_title}
          height="300"
        />
        <div>
          <h2>{`${title}`}</h2>
          <p>user score: {vote_average} </p>
          <h3>Overview: </h3>
          <p>{overview} </p>
          <p>Genres:</p>
          <ul>
            {genres?.map(({ id, name }) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

Movie.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
  }),
};
