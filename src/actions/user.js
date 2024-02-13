// ici on placera les actions qui concernent l'utilisateur
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_SIGN_UP = 'SUBMIT_SIGN_UP';
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const HANDLE_SUCCESSFUL_SIGN_UP = 'HANDLE_SUCCESSFUL_SIGN_UP';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const CLICK_LOGOUT = 'CLICK_LOGOUT';
export const UPDATE_LOGGED_OUT = 'UPDATE_LOGGED_OUT';

export const changeLoginField = (value, identifier) => ({
  type: CHANGE_LOGIN_FIELD,
  value,
  identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const submitSignUp = () => ({
  type: SUBMIT_SIGN_UP,
});

export const handleSuccessfulLogin = (token) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  token,
});

export const handleSuccessfulSignUp = () => ({
  type: HANDLE_SUCCESSFUL_SIGN_UP,
});
// Note : on peut aussi avoir logged en payload, ou alors le reducer se débrouille
// en mettant touours "true"
export const fetchUserData = () => ({
  type: FETCH_USER_DATA,
});

export const saveUserData = (firstName, lastName) => ({
  type: SAVE_USER_DATA,
  firstName,
  lastName,
});

export const clickLogout = () => ({
  type: CLICK_LOGOUT,
});

export const updateLoggedOut = () => ({
  type: UPDATE_LOGGED_OUT,
});