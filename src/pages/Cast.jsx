import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCast } from 'services/api';
import { MovieCast } from 'components/MovieCast';
import { Loader } from 'components/Loader';

const Cast = () => {
  const { filmId } = useParams();
  const [cast, setCast] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    fetchCast(filmId)
      .then(setCast)
      .catch(error => console.log(error))
      .finally(setLoader(false));
  }, [filmId]);

  return (
    <div>
      {loader && <Loader />}
      {cast.length === 0 && <p>no cast</p>}
      <MovieCast cast={cast} />
    </div>
  );
};

export default Cast;
