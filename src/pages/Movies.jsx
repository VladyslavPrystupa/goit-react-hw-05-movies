import { ListOfMovies } from 'components/ListOfMovies';
import { Searchbar } from 'components/Searchbar';
import { useEffect, useState, useMemo } from 'react';
import { fetchMoviesByQuery } from 'services/api';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const memoQuery = useMemo(
    () => searchParams.get('query') ?? [],
    [searchParams]
  );

  useEffect(() => {
    fetchMoviesByQuery(memoQuery)
      .then(data => setSearchedMovies(data))
      .catch(error => alert(error));
  }, [memoQuery]);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { value } = form.elements.searcValue;

    if (value === '') {
      setSearchParams({});
      return alert('Enter movie name');
    }

    setSearchParams({ query: value });

    form.reset();
  };

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      <ListOfMovies list={searchedMovies} />
    </div>
  );
};
