import React, { useEffect, useState,memo } from "react";
import PropTypes from 'prop-types';

function Modal({ modalData, editHandler,setOpen }) {
  let { data, id } = modalData;
  const [input, setInput] = useState("");

  useEffect(() => {
    setInput(data);
  }, [data]);

  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Edit
              </h5>
            </div>
            <div class="modal-body">
              <div class="input-group mb-3">
                <input
                  id="edit"
                  type="text"
                  class="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={() => setOpen(false)}
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => editHandler(input, id)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  removeHandler: PropTypes.func,
  id: PropTypes.string,
  setOpen: PropTypes.func,
};

export default memo(Modal);
