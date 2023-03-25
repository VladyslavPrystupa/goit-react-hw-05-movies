import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchReviews } from 'services/api';
import { MovieReview } from 'components/MovieReview';

const Reviews = () => {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchReviews(filmId)
      .then(setReviews)
      .catch(error => console.log(error));
  }, [filmId]);

  return (
    <div>
      {reviews.length === 0 && <p>no reviews</p>}
      <MovieReview reviews={reviews} />
    </div>
  );
};

export default Reviews;
