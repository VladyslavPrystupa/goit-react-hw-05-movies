import { ListOfMovies } from 'components/ListOfMovies';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';

export const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() => {
    fetchTrending()
      .then(data => setTrendingFilms(data))
      .catch(error => alert(error));
  }, []);

  return (
    <div>
      <ListOfMovies list={trendingFilms} />
    </div>
  );
};
