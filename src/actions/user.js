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
export const FRIENDS_FETCHED = 'FRIENDS_FETCHED';
export const SAVE_FRIENDS = 'SAVE_FRIENDS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_AVATAR = 'USER_UPDATE_AVATAR';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAILURE = 'USER_UPDATE_FAILURE';
export const USER_UPDATE_AVATAR_SUCCESS = 'USER_UPDATE_AVATAR_SUCCESS';
export const USER_UPDATE_AVATAR_FAILURE = 'USER_UPDATE_AVATAR_FAILURE';
export const UPDATE_USER_INPUT = 'UPDATE_USER_INPUT';
export const CHANGE_USER_INPUT = 'CHANGE_USER_INPUT';
export const DELETE_USER = 'DELETE_USER';
export const USER_DELETE_SUCCESS = 'USER_DELETE_SUCCESS';
export const USER_DELETE_FAILURE = 'USER_DELETE_FAILURE';
export const FETCH_USERS = 'FETCH_USERS';
export const CHANGE_SEARCH_USERS_FIELD = 'CHANGE_SEARCH_USERS_FIELD';
export const FETCH_USER_BY_MAIL = 'FETCH_USER_BY_MAIL';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGNUP_ERROR = 'SIGNUP_ERROR';
export const CLEAR_ERROR_MESSAGE = 'CLEAR_ERROR_MESSAGE';
export const HANDLE_MODIFICATION_STATUS = 'HANDLE_MODIFICATION_STATUS';
export const SET_ERROR_MESSAGE = 'SET_ERROR_MESSAGE';
export const CLEAR_SEARCH_FRIEND = 'CLEAR_SEARCH_FRIEND';

export const clearSearchFriend = () => ({
  type: CLEAR_SEARCH_FRIEND,
});

export const loginError = (errorMessage) => ({
  type: LOGIN_ERROR,
  errorMessage,
});

export const signupError = (errorMessage) => ({
  type: LOGIN_ERROR,
  errorMessage,
});

export const setErrorMessage = (errorMessage) => ({
  type: SET_ERROR_MESSAGE,
  errorMessage,
});

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

export const saveUserData = (
  firstName,
  lastName,
  email,
  avatarURL,
  userId
) => ({
  type: SAVE_USER_DATA,
  firstName,
  lastName,
  email,
  avatarURL,
  userId,
});

export const saveUserResultData = (
  firstName,
  lastName,
  email,
  avatarURL,
  userId
) => ({
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

export const friendsFetched = (bool) => ({
  type: FRIENDS_FETCHED,
  bool,
});

export const saveFriends = (friends) => ({
  type: SAVE_FRIENDS,
  friends,
});

export const addFriend = (friendId) => ({
  type: ADD_FRIEND,
  friendId,
});

export const deleteFriend = (friendId) => ({
  type: DELETE_FRIEND,
  friendId,
});

export const userUpdateRequest = () => ({
  type: USER_UPDATE_REQUEST,
});

export const userUpdateAvatar = () => ({
  type: USER_UPDATE_AVATAR,
});

export const userUpdateSuccess = () => ({
  type: USER_UPDATE_SUCCESS,
});

export const userUpdateFailure = (error) => ({
  type: USER_UPDATE_FAILURE,
  error,
});

export const userUpdateAvatarSuccess = () => ({
  type: USER_UPDATE_AVATAR_SUCCESS,
});
export const userUpdateAvatarFailure = () => ({
  type: USER_UPDATE_AVATAR_FAILURE,
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

export const clearErrorMessage = () => ({
  type: CLEAR_ERROR_MESSAGE,
});

export const handleModificationStatus = () => ({
  type: HANDLE_MODIFICATION_STATUS,
});
