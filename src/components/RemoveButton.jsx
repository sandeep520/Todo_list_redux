import React, { memo } from "react";
import PropTypes from 'prop-types';

function RemoveButton({ removeHandler, id }) {
  return (
    <button
      type="button"
      class="btn btn-danger"
      onClick={() => removeHandler(id)}
    >
      Delete
    </button>
  );
}

RemoveButton.propTypes = {
  removeHandler: PropTypes.func,
  id: PropTypes.string,
};

export default memo(RemoveButton);
