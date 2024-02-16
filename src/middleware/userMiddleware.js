import axios from 'axios';
import {
  SUBMIT_LOGIN,
  SUBMIT_SIGN_UP,
  handleSuccessfulLogin,
  fetchUserData,
  FETCH_USER_DATA,
  saveUserData,
  handleSuccessfulSignUp,
  FETCH_FRIENDS,
  saveFriends,
} from '../actions/user';

import { fetchMyTrips } from '../actions/trip';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      const { email, password } = store.getState().user;

      // Données à envoyer au format JSON
      const logInJsonData = {
        username: email,
        password,
      };

      // Configuration de la requête Axios
      // eslint-disable-next-line no-case-declarations
      const logInRequestOptions = {
        method: 'POST',
        url: 'http://localhost:8001/api/login_check',
        headers: {
          'Content-Type': 'application/json',
        },
        data: logInJsonData,
      };

      // Exécution de la requête
      axios(logInRequestOptions)
        .then((response) => {
          // Traitement de la réponse
          store.dispatch(handleSuccessfulLogin(response.data.token));
          store.dispatch(fetchUserData());
          store.dispatch(fetchMyTrips());
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });

      break;

    case SUBMIT_SIGN_UP:
      const { signUpEmail, signUpPassword, lastnameValue, firstnameValue } =
        store.getState().user;

      // Données à envoyer au format JSON
      const signUpJsonData = {
        firstname: firstnameValue,
        lastname: lastnameValue,
        email: signUpEmail,
        password: signUpPassword,
      };

      // Configuration de la requête Axios
      // eslint-disable-next-line no-case-declarations
      const signUpRequestOptions = {
        method: 'POST',
        url: 'http://localhost:8001/api/user/add',
        headers: {
          'Content-Type': 'application/json',
        },
        data: signUpJsonData,
      };

      // Exécution de la requête
      axios(signUpRequestOptions)
        .then((response) => {
          // Traitement de la réponse
          store.dispatch(handleSuccessfulSignUp());
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });

      break;

    case FETCH_USER_DATA:
      // on doit envoyer le JWT dans le header Authorization de la requête, pour
      // que le serveur nous fournisse NOS recettes préférées
      axios
        .get(
          // URL
          'http://localhost:8001/api/user/me',
          // options (notamment les headers)
          {
            headers: {
              // nom: contenu
              // on fournit le token JWT dans le header Authorization, en faisant
              // précéder par le mot Bearer
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        .then((response) => {
          store.dispatch(
            saveUserData(response.data.firstname, response.data.lastname)
          );
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_FRIENDS:
      axios
        .get(`http://localhost:8001/api/friend`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          store.dispatch(saveFriends(response.data));
        })
        .catch((error) => {
          console.error(error);
          // Gestion de l'erreur
        });
      break;

    default:
  }

  next(action);
};

export default userMiddleware;
