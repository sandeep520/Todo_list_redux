import React,{memo} from "react";
import Cards from "./Cards";
import SearchInput from "./SearchInput";
import PropTypes from 'prop-types';

function TodoList({
  searchInput,
  list,
  onChangeHandler,
  updateList,
  removeHandler,
  modalData,
  modalHandler,
  editHandler,
  checkBoxChanger,
  addFavourite
}) {
    
  return (
    <div>
      <SearchInput
        searchInput={searchInput}
        onChangeHandler={onChangeHandler}
        updateList={updateList}
      />
      <Cards
        list={list}
        removeHandler={removeHandler}
        modalData={modalData}
        modalHandler={modalHandler}
        editHandler={editHandler}
        checkBoxChanger={checkBoxChanger}
        addFavourite={addFavourite}
        type="list"
      />
    </div>
  );
}

TodoList.propTypes = {
  searchInput: PropTypes.string,
  list: PropTypes.array,
  onChangeHandler: PropTypes.func,
  updateList: PropTypes.func,
  removeHandler: PropTypes.func,
  modalData: PropTypes.object,
  modalHandler: PropTypes.func,
  editHandler: PropTypes.func,
  checkBoxChanger: PropTypes.func
};

export default memo(TodoList);
