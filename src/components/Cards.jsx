import React,{memo} from "react";
import Card from "./Card";
import PropTypes from 'prop-types';

function Cards({ list, removeHandler, modalHandler, editHandler,checkBoxChanger,addFavourite,type }) {
  return (
    <>
      {list?.map((card, key) => (
        <Card
          key={key}
          card={card}
          removeHandler={removeHandler}
          modalHandler={modalHandler}
          editHandler={editHandler}
          modalHandler={modalHandler}
          checkBoxChanger={checkBoxChanger}
          addFavourite={addFavourite}
          type={type}
        />
      ))}
    </>
  );
}

Cards.propTypes = {
  updateList: PropTypes.func,
  removeHandler: PropTypes.func,
  modalHandler: PropTypes.func,
  editHandler: PropTypes.func,
  checkBoxChanger: PropTypes.func,
  type: PropTypes.string,
};

export default memo(Cards);
