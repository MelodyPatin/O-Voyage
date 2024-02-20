// ici on placera les actions qui concernent l'utilisateur
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const SUBMIT_SIGN_UP = 'SUBMIT_SIGN_UP';
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';
export const HANDLE_SUCCESSFUL_SIGN_UP = 'HANDLE_SUCCESSFUL_SIGN_UP';
export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const SAVE_USER_RESULT_DATA = 'SAVE_USER_RESULT_DATA';
export const CLICK_LOGOUT = 'CLICK_LOGOUT';
export const UPDATE_LOGGED_OUT = 'UPDATE_LOGGED_OUT';
export const FETCH_FRIENDS = 'FETCH_FRIENDS';
export const SAVE_FRIENDS = 'SAVE_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAILURE = 'USER_UPDATE_FAILURE';
export const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT';
export const CHANGE_USER_INPUT = 'CHANGE_USER_INPUT';
export const DELETE_USER = 'DELETE_USER';
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS';
export const USER_DELETE_FAILURE = 'USER_DELETE_FAILURE';
export const FETCH_USERS = 'FETCH_USERS';
export const CHANGE_SEARCH_USERS_FIELD = 'CHANGE_SEARCH_USERS_FIELD';
export const FETCH_USER_BY_MAIL = 'FETCH_USER_BY_MAIL';

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

export const saveUserData = (firstName, lastName, email, avatarURL) => ({
  type: SAVE_USER_DATA,
  firstName,
  lastName,
  email,
  avatarURL,
});

export const saveUserResultData = (firstName, lastName, email, avatarURL, userId) => ({
  type: SAVE_USER_RESULT_DATA,
  firstName,
  lastName,
  email,
  avatarURL,
  userId,
});


export const clickLogout = () => ({
  type: CLICK_LOGOUT,
});

export const updateLoggedOut = () => ({
  type: UPDATE_LOGGED_OUT,
});

export const fetchFriends = () => ({
  type: FETCH_FRIENDS,
});

export const saveFriends = (friends) => ({
  type: SAVE_FRIENDS,
  friends,
});

export const addFriend = (friendId) => ({
  type: ADD_FRIEND,
  friendId,
});

export const userUpdateRequest = () => ({
  type: USER_UPDATE_REQUEST,
});

export const userUpdateSuccess = () => ({
  type: USER_UPDATE_SUCCESS,
});
export const userUpdateFailure = (error) => ({
  type: USER_UPDATE_FAILURE,
  error,
});

export const updateUserInput = (fieldName, value) => ({
  type: UPDATE_USER_INPUT,
  payload: { fieldName, value },
});

export const changeUserInput = (value, identifier) => ({
  type: CHANGE_USER_INPUT,
  value,
  identifier,
});

export const deleteUser = () => ({
  type: DELETE_USER,
});

export const userDeleteSuccess = (deletionStatus) => ({
  type: USER_DELETE_SUCCESS,
  deletionStatus,
});

export const userDeleteFailure = (deletionStatus) => ({
  type: USER_DELETE_FAILURE,
  deletionStatus,
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
});

export const changeSearchUsersField = (value, identifier) => ({
  type: CHANGE_SEARCH_USERS_FIELD,
  value,
  identifier,
});

export const fetchUserByMail = () => ({
  type: FETCH_USER_BY_MAIL,
});
