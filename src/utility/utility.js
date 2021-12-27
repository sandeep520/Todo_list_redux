export const updateLocalStorage = (key,list) => {
    localStorage.setItem(key,JSON.stringify(list));
}

export const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

