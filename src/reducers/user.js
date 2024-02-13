import { FaceSmileIcon } from '@heroicons/react/24/solid';
import {
  CHANGE_LOGIN_FIELD,
  HANDLE_SUCCESSFUL_LOGIN,
  HANDLE_SUCCESSFUL_SIGN_UP,
  SAVE_USER_DATA,
  CLICK_LOGOUT,
  UPDATE_LOGGED_OUT,
} from '../actions/user';

export const initialState = {
  // indique si l'utilisateur est authentifié
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
  // pseudo de l'utilisateur (quand il est authentifié)
  firstname: '',
  // nom de l'utilisateur (quand il est authentifié)
  lastname: '',
  // token JWT
  token: '',
  // redirection
  redirectTo: null,
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
      return {
        ...state,
        logged: true,
        token: action.token,
        // sécurité : on efface les identifiants du state dès qu'on a plus besoin
        email: '',
        password: '',
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
        firstname: action.firstName,
        lastname: action.lastName,
      };

    case CLICK_LOGOUT:
      return {
        ...state,
        logged: false,
        loggedOut: true,
        signedUp: false,
        token: '',
        firstname: '',
        lastname: '',
      };

    case UPDATE_LOGGED_OUT:
      return {
        ...state,
        loggedOut: false,
      };

    default:
      return state;
  }
};

export default reducer;
