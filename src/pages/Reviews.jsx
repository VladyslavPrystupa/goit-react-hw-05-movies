import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'services/api';
import { MovieReview } from 'components/MovieReview';
import { Loader } from 'components/Loader';

const Reviews = () => {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);

    fetchReviews(filmId)
      .then(setReviews)
      .catch(error => console.log(error))
      .finally(setLoader(false));
  }, [filmId]);

  return (
    <div>
      {loader && <Loader />}

      {reviews.length === 0 && <p>no reviews</p>}
      <MovieReview reviews={reviews} />
    </div>
  );
};

export default Reviews;
