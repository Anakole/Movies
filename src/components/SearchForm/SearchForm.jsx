import { BiSearch } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { Form, Input, SearchButton } from './SearchForm.styled';

export const SearchForm = ({ value, onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(e.target.elements.query.value);
    e.target.elements.query.value = '';
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="query" defaultValue={value} />
      <SearchButton type="submit">
        <BiSearch />
      </SearchButton>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
