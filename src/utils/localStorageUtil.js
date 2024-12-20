// src/localStorageUtil.js

export const saveData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  
  export const loadData = (key) => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };
  
  export const clearData = (key) => {
    localStorage.removeItem(key);
  };
  