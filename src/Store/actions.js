export const authCheckHandler = () => {
  return {
    type: "AUTH_CHECK"
  };
};

export const authHandler = (data) => {
  return {
    type: "AUTH_SUCCESS",
    payload: data
  };
};

export const logOutHandler = () => {
  return {
    type: "LOG_OUT"
  };
};

export const getToDoList = () => {
    return {
      type: "GET_TODO_LIST",
    };
  };

export const updateToDoList = (payload) => {
  return {
    type: "UPDATE_LIST",
    payload: payload,
  };
};

export const removeToDoList = (id) => {
  return {
    type: "REMOVE_TODO_LIST",
    payload: id,
  };
};

export const editToDoList = (input, id) => {
  return {
    type: "EDIT_TODO_LIST",
    payload: { input, id },
  };
};

export const checkBoxHandler = (id) => {
  return {
    type: "CHECK_BOX",
    payload: id,
  };
};

export const getFavourites = () => {
  return {
    type: "GET_FAVOURITES",
  };
};

export const toggleFavourites = (id) => {
  return {
    type: "TOGGLE_FAVOURITES",
    payload: id
  };
};
