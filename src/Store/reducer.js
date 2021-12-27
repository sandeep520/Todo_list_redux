import { updateLocalStorage, getLocalStorage } from "../utility/utility";

const initialState = {
  user: { email: "", password: "", id: null },
  list: [],
  favouriteList: [],
};

const authCheckHandler = (state, action) => {
  state.user.id = getLocalStorage("list")?.user
    ? getLocalStorage("list")?.user?.id
    : null;
  return state;
};

const authSuccessHandler = (state, action) => {
  state.user = action.payload;
  updateLocalStorage("list", state);
  return state;
};

const logOutHandler = (state, action) => {
  state.user = {};
  state.list = [];
  state.favouriteList = [];
  updateLocalStorage("list", state);
  return state;
};

const getToDoList = (state, action) => {
  let temp = getLocalStorage("list");
  state.list = temp ? [...temp.list] : [];
  return state;
};

const getFavouriteToDoList = (state, action) => {
  let temp = getLocalStorage("list");
  state.favouriteList = temp ? [...temp.favouriteList] : [];
  return state;
};

const updateList = (state, action) => {
  state.list = [
    ...state.list,
    {
      data: action.payload.data,
      isChecked: false,
      isFavourite: false,
      id: action.payload.id,
    },
  ];
  updateLocalStorage("list", state);
  return state;
};

const removeList = (state, action) => {
  let tempList = [...state.list];
  let temp = tempList.filter((data) => data.id !== action.payload);
  state.list = temp;
  state.favouriteList = temp.filter((data) => data.isFavourite);
  updateLocalStorage("list", state);
  return state;
};

const editList = (state, action) => {
  let tempList = [...state.list];
  let tempIndex = tempList.findIndex((data) => data.id === action.payload.id);
  tempIndex > -1 && (tempList[tempIndex].data = action.payload.input);
  state.list = tempList;
  updateLocalStorage("list", state);
  return state;
};

const checkBoxHandler = (state, action) => {
  let tempList = [...state.list];
  let tempIndex = tempList.findIndex((data) => data.id === action.payload);
  state.favouriteList = tempList.filter((data) => data.isFavourite);
  tempIndex > -1 &&
    (tempList[tempIndex].isChecked = !tempList[tempIndex].isChecked);
  state.list = tempList;
  updateLocalStorage("list", state);
  return state;
};

const toggleFavourites = (state, action) => {
  let tempList = [...state.list];
  let tempIndex = tempList.findIndex((data) => data.id === action.payload);
  tempIndex > -1 &&
    (tempList[tempIndex].isFavourite = !tempList[tempIndex].isFavourite);
  state.list = tempList;
  state.favouriteList = tempList.filter((data) => data.isFavourite);
  updateLocalStorage("list", state);
  return state;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_CHECK":
      return authCheckHandler(state, action);
    case "AUTH_SUCCESS":
      return authSuccessHandler(state, action);
    case "LOG_OUT":
      return logOutHandler(state, action);
    case "GET_TODO_LIST":
      return getToDoList(state, action);
    case "UPDATE_LIST":
      return updateList(state, action);
    case "REMOVE_TODO_LIST":
      return removeList(state, action);
    case "EDIT_TODO_LIST":
      return editList(state, action);
    case "CHECK_BOX":
      return checkBoxHandler(state, action);
    case "GET_FAVOURITES":
      return getFavouriteToDoList(state, action);
    case "TOGGLE_FAVOURITES":
      return toggleFavourites(state, action);

    default:
      return state;
  }
};

export default reducer;
