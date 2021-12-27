import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import TodoList from "../components/TodoList";
import { v4 as uuidv4 } from "uuid";
import Modal from "../components/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  getToDoList,
  updateToDoList,
  removeToDoList,
  editToDoList,
  checkBoxHandler,
  toggleFavourites,
} from "../Store/actions";

function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [modalData, setModalData] = useState({});
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const toDoList = useSelector((state) => state?.list);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getToDoList());
  };

  const updateList = useCallback(
    (value) => {
      value && dispatch(updateToDoList({ data: value, id: uuidv4() }));
      setSearchInput("");
    },
    [toDoList]
  );

  const onChangeHandler = useCallback(
    (e) => {
      setSearchInput(e.target.value);
    },
    [searchInput]
  );

  const removeHandler = useCallback(
    (id) => {
      dispatch(removeToDoList(id));
    },
    [toDoList]
  );

  const modalHandler = useCallback(
    (data) => {
      setModalData(data);
      setOpen(true);
    },
    [modalData]
  );

  const editHandler = useCallback(
    (input, id) => {
      dispatch(editToDoList(input, id));
      setOpen(false);
    },
    [toDoList]
  );

  const checkBoxChanger = useCallback(
    (id) => {
      dispatch(checkBoxHandler(id));
    },
    [toDoList]
  );

  const addFavourite = useCallback(
    (id) => {
      dispatch(toggleFavourites(id));
    },
    [toDoList]
  );

  const renderModel = useMemo(() => {
    return <Modal modalData={modalData} editHandler={editHandler} setOpen={setOpen}/>;
  }, [open]);

  return (
    <>
      <div classNameName="App">
        <TodoList
          searchInput={searchInput}
          list={toDoList}
          onChangeHandler={onChangeHandler}
          updateList={updateList}
          removeHandler={removeHandler}
          modalData={modalData}
          modalHandler={modalHandler}
          editHandler={editHandler}
          checkBoxChanger={checkBoxChanger}
          addFavourite={addFavourite}
        />
        {renderModel}
      </div>
    </>
  );
}

export default Home;
