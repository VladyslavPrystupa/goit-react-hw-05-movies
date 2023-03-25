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
