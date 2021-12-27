import React, { memo } from "react";
import PropTypes from 'prop-types';

function SearchInput({ searchInput, onChangeHandler, updateList }) {
  return (
    <>
      <div className="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={searchInput}
          onChange={onChangeHandler}
        />
        <span
          class="input-group-text"
          id="basic-addon2"
          onClick={() => updateList(searchInput)}
        >
          Add
        </span>
      </div>
    </>
  );
}

SearchInput.propTypes = {
  searchInput: PropTypes.string,
  onChangeHandler: PropTypes.func,
  updateList: PropTypes.func,
};

export default memo(SearchInput);
