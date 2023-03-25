export const Searchbar = ({ onSubmit }) => {
  // const [searcValue, setSearcValue] = useState('');

  // const handleChange = evt => {
  //   const { value } = evt.target;

  //   setSearcValue(value);
  // };

  // const reset = () => {
  //   setSearcValue('');
  // };

  // const handleSubmit = evt => {
  //   evt.preventDefault();

  //   onSearch(searcValue);

  //   reset();
  // };
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
          // value={searcValue}
          // onChange={handleChange}
        />
      </form>
    </header>
  );
};
