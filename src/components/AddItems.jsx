import React from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItems = ({ newItem, setNewItem, handleItemSubmit }) => {
  return (
    <form onSubmit={handleItemSubmit}>
      <label htmlFor="addItem"></label>
      <input
        autoFocus
        id="addItem"
        type="text"
        required
        placeholder="What you what to Add.. "
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" id="add_it" aria-label="Add your item">
        <FaPlus />
      </button>
    </form>
  );
};

export default AddItems;
