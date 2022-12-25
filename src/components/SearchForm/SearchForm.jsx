export const SearchForm = ({ value, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(e.target.elements.query.value);
    e.target.elements.query.value = '';
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="query" defaultValue={value} />
      <button type="submit">Search</button>
    </form>
  );
};
