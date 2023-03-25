// import BackButton from './BackButton';

export const Movie = ({
  movie: { poster_path, original_title, title, vote_average, overview, genres },
}) => {
  return (
    <>
      {/* <BackButton /> */}
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