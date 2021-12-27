import React,{memo} from "react";
import PropTypes from 'prop-types';

function EditButton({ modalHandler, card }) {
  return (
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      onClick={() => modalHandler(card)}
    >
      Edit
    </button>
  );
}

EditButton.propTypes = {
  card: PropTypes.object,
  modalHandler: PropTypes.func,
};


export default memo(EditButton);
