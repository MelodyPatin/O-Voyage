import {
  CHANGE_LOGIN_FIELD,
  HANDLE_SUCCESSFUL_LOGIN,
  HANDLE_SUCCESSFUL_SIGN_UP,
  SAVE_USER_DATA,
  CLICK_LOGOUT,
  UPDATE_LOGGED_OUT,
  SAVE_FRIENDS,
  FETCH_FRIENDS,
  USER_UPDATE_REQUEST,
  USER_UPDATE_SUCCESS,
  USER_UPDATE_FAILURE,
  UPDATE_USER_INPUT,
  CHANGE_USER_INPUT,
  DELETE_USER,
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
} from '../actions/user';

export const initialState = {
  logged: false,
  // indique si l'utilisateur est déconnecté
  loggedOut: false,
  // indique si l'utilisateur a créé son compte
  signedUp: false,
  // contenu du champ email du formulaire de login
  email: '',
  // contenu du champ password du formulaire de login
  password: '',
  // contenu du champ email du formulaire de signup
  signUpEmail: '',
  // contenu du champ password du formulaire de signup
  signUpPassword: '',
  firstnameValue: '',
  lastnameValue: '',
  avatar: '',
  avatarUpdate: '',
  // redirection
  redirectTo: null,
  myTrips: [],
  friends: [],
  deletionStatus: null, // Peut être 'success' ou 'failure'
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

/* reducer qui s'occupe de ce qui concerne l'utilisateur */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_LOGIN_FIELD:
      return {
        ...state,
        [action.identifier]: action.value,
      };
    /*
      avec les ifs, si on ajoute un champ dans le formulaire il faut ajouter
      un nouveau if.
      Avec cette syntaxe, le reducer est prêt pour n'importe quel ajout de champ
      MAIS il faut que le nom du champ dans le state soit présent dans le payload
      de l'action
    */

    case HANDLE_SUCCESSFUL_LOGIN:
      localStorage.setItem('token', action.token);

      return {
        ...state,
        // sécurité : on efface les identifiants du state dès qu'on a plus besoin
        email: '',
        password: '',
        loggedState: true,
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

    case SAVE_USER_RESULT_DATA:
      return {
        ...state,
        firstNameSearch: action.firstName,
        lastNameSearch: action.lastName,
        avatarSearch: action.avatarURL,
        emailSearch: action.email,
        userIdSearch: action.userId,
      };

    case CLICK_LOGOUT:
      localStorage.clear(); // Efface tout le localStorage

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

    case USER_UPDATE_REQUEST:
      return {
        ...state,
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

    case DELETE_USER:
      return {
        ...state,
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

    case LOGIN_ERROR: // Nouveau cas pour gérer l'action LOGIN_ERROR
      return {
        ...state,
        errorMessage: action.errorMessage, // Mettre à jour le message d'erreur dans le state
      };

    case SIGNUP_ERROR: // Nouveau cas pour gérer l'action LOGIN_ERROR
      return {
        ...state,
        errorMessage: action.errorMessage, // Mettre à jour le message d'erreur dans le state
      };

    case SET_ERROR_MESSAGE: // Nouveau cas pour gérer l'action LOGIN_ERROR
      return {
        ...state,
        errorMessage: action.errorMessage, // Mettre à jour le message d'erreur dans le state
      };

    case CLEAR_ERROR_MESSAGE: // Nouveau cas pour gérer l'action LOGIN_ERROR
      return {
        ...state,
        errorMessage: '',
      };

    case FRIENDS_FETCHED:
      return {
        ...state,
        friendsFetched: action.bool, // Définir friendsFetched à true une fois les amis chargés
      };

    default:
      return state;
  }
};

export default reducer;
