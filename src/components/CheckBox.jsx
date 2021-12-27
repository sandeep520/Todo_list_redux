import React,{memo} from "react";
import PropTypes from "prop-types";

function CheckBox({ isChecked, checkBoxChanger, id }) {
  return (
    <input
      class="form-check-input"
      type="checkbox"
      value=""
      id="flexCheckChecked"
      checked={isChecked}
      onChange={() => checkBoxChanger(id)}
    />
  );
}

CheckBox.propTypes = {
  isChecked: PropTypes.bool,
  checkBoxChanger: PropTypes.func,
  id: PropTypes.string,
};

export default memo(CheckBox);
