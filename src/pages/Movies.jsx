import { ListOfMovies } from 'components/ListOfMovies';
import { Searchbar } from 'components/Searchbar';
import { useEffect, useState, useMemo } from 'react';
import { fetchMoviesByQuery } from 'services/api';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const memoQuery = useMemo(
    () => searchParams.get('query') ?? '',
    [searchParams]
  );

  useEffect(() => {
    fetchMoviesByQuery(memoQuery)
      .then(data => setSearchedMovies(data))
      .catch(error => alert(error));
  }, [memoQuery]);

  const onSubmit = e => {
    e.preventDefault();
    const { value } = e.currentTarget.elements.searcValue;
    e.currentTarget.reset();

    if (value === '') {
      setSearchParams({});
      return alert('Enter movie name');
    }
    setSearchParams({ query: value });
  };

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      <ListOfMovies list={searchedMovies} />
    </div>
  );
};

export default Movies;
