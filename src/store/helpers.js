export const getStateFromLocalStorage = (key) => {
  if (!JSON.parse(localStorage.getItem(key))) {
    return [];
  } else {
    return JSON.parse(localStorage.getItem(key));
  }
};

export const getThemeFromLocalStorage = (key) => {
  if (!localStorage.getItem(key)) {
    return 'light';
  } else {
    return localStorage.getItem(key);
  }
};
