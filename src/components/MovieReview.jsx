export const MovieReview = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ author, content }) => (
        <li key={author}>
          <h3>{author}</h3>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};
