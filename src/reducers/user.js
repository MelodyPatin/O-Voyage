import {
  CHANGE_LOGIN_FIELD,
  HANDLE_SUCCESSFUL_LOGIN,
  HANDLE_SUCCESSFUL_SIGN_UP,
  SAVE_USER_DATA,
  CLICK_LOGOUT,
  UPDATE_LOGGED_OUT,
  SAVE_FRIENDS,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  UPDATE_USER_INPUT,
  CHANGE_USER_INPUT,
  USER_DELETE_SUCCESS,
  USER_DELETE_FAILURE,
  CHANGE_SEARCH_USERS_FIELD,
  SAVE_USER_RESULT_DATA,
  LOGIN_ERROR,
  SIGNUP_ERROR,
  CLEAR_ERROR_MESSAGE,
  HANDLE_MODIFICATION_STATUS,
  SET_ERROR_MESSAGE,
  FRIENDS_FETCHED,
  CLEAR_SEARCH_FRIEND,
} from '../actions/user';

export const initialState = {
  logged: false,
  loggedOut: false,
  signedUp: false,
  email: '',
  password: '',
  signUpEmail: '',
  signUpPassword: '',
  firstnameValue: '',
  lastnameValue: '',
  avatar: '',
  avatarUpdate: '',
  redirectTo: null,
  myTrips: [],
  friends: [],
  deletionStatus: null,
  searchUsersValue: '',
  firstNameSearch: '',
  lastNameSearch: '',
  avatarSearch: '',
  emailSearch: '',
  userIdSearch: 0,
  userId: '',
  errorMessage: '',
  modificationStatus: '',
  friendsFetched: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case HANDLE_SUCCESSFUL_LOGIN:
      localStorage.setItem('token', action.token);
      localStorage.setItem('logged', true);

      return {
        ...state,
        email: '',
        password: '',
        logged: true,
      };

    case HANDLE_SUCCESSFUL_SIGN_UP:
      return {
        ...state,
        signedUp: true,
        signUpEmail: '',
        signUpPassword: '',
        firstname: '',
        lastname: '',
      };

    case SAVE_USER_DATA:
      return {
        ...state,
        firstnameValue: action.firstName,
        lastnameValue: action.lastName,
        avatar: action.avatarURL,
        email: action.email,
        userId: action.userId,
      };

    case CLEAR_SEARCH_FRIEND:
      return {
        ...state,
        searchUsersValue: '',
        firstNameSearch: '',
        lastNameSearch: '',
        avatarSearch: '',
        emailSearch: '',
        userIdSearch: '',
      };

    case CLICK_LOGOUT:
      localStorage.clear();

      return initialState;

    case UPDATE_LOGGED_OUT:
      return {
        ...state,
        loggedOut: false,
      };

    case SAVE_FRIENDS:
      return {
        ...state,
        friends: action.friends,
      };

    case USER_UPDATE_SUCCESS:
      return {
        ...state,
        password: '',
        modificationStatus: 'success',
      };

    case USER_UPDATE_FAILURE:
      return {
        ...state,
        password: '',
        modificationStatus: 'failure',
        errorMessage: action.error,
      };

    case HANDLE_MODIFICATION_STATUS:
      return {
        ...state,
        password: '',
        modificationStatus: '',
      };

    case UPDATE_USER_INPUT:
      return {
        ...state,
        [action.payload.fieldName]: action.payload.value,
      };

    case CHANGE_USER_INPUT:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case USER_DELETE_SUCCESS:
      return {
        ...state,
        deletionStatus: 'success',
      };

    case USER_DELETE_FAILURE:
      return {
        ...state,
        deletionStatus: 'failure',
      };

    case CHANGE_SEARCH_USERS_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };

    case SIGNUP_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };

    case SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.errorMessage,
      };

    case CLEAR_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: '',
      };

    case FRIENDS_FETCHED:
      return {
        ...state,
        friendsFetched: action.bool,
      };

    case SAVE_USER_RESULT_DATA:
      return {
        ...state,
        firstNameSearch: action.firstName,
        lastNameSearch: action.lastName,
        avatarSearch: action.avatarURL,
        emailSearch: action.email,
        userIdSearch: action.userId,
      };

    default:
      return state;
  }
};

export default reducer;
