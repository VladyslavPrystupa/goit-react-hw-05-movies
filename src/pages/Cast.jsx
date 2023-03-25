import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCast } from 'services/api';
import { MovieCast } from 'components/MovieCast';

const Cast = () => {
  const { filmId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(filmId)
      .then(setCast)
      .catch(error => console.log(error));
  }, [filmId]);

  return (
    <div>
      {cast.length === 0 && <p>no cast</p>}
      <MovieCast cast={cast} />
    </div>
  );
};

export default Cast;
