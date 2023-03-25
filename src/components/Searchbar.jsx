import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  return (
    <header>
      <form onSubmit={onSubmit}>
        <button type="submit">search</button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          name="searcValue"
        />
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmitL: PropTypes.func.isRequired,
};
