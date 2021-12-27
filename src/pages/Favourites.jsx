import React, { useState, useEffect, useCallback, useMemo, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../components/Cards";
import { getFavourites, toggleFavourites } from "../Store/actions";

function Favourites() {
  const dispatch = useDispatch();
  const favouriteList = useSelector((state) => state?.favouriteList);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    dispatch(getFavourites());
  };

  const addFavourite = useCallback((id) => {
    dispatch(toggleFavourites(id));
  },[favouriteList]);

  return (
    <>
      <Cards
        list={favouriteList}
        addFavourite={addFavourite}
        type="favourites"
      />
    </>
  );
}

export default Favourites;
