import { ListOfMovies } from 'components/ListOfMovies';
// import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { fetchTrending } from 'services/api';

const Home = () => {
  const [trendingFilms, setTrendingFilms] = useState([]);
  // const [loader, setLoader] = useState(false);

  useEffect(() => {
    // setLoader(true);
    fetchTrending()
      .then(data => setTrendingFilms(data))
      .catch(error => alert(error));
    // .finally(setLoader(false));
  }, []);

  return (
    <>
      {/* {loader && <Loader />} */}
      <ListOfMovies list={trendingFilms} />
    </>
  );
};
export default Home;
