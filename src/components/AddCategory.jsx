import React, { useState } from 'react'
import propTypes from 'prop-types';
const AddCategory = ({ setCategories }) => {
  const [category, setCategory] = useState('');

  const handleCategory = (e) => {
    setCategory(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.trim().length > 2) {
      setCategories(prevState => [
        category,
        ...prevState
      ]);
      setCategory('');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category</h2>
      <input
        type="text"
        onChange={handleCategory}
        value={category}
        placeholder="Add a Category"
      />
    </form>
  )
};

AddCategory.propTypes = {
  setCategories: propTypes.func.isRequired
}
export default AddCategory;