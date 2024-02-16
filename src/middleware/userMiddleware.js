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
import api from '../api';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      const { email, password } = store.getState().user;

      // Données à envoyer au format JSON
      const logInJsonData = {
        username: email,
        password,
      };

      // Exécution de la requête
      api
        .post('/login_check', logInJsonData)
        .then((response) => {
          // Traitement de la réponse
          store.dispatch(handleSuccessfulLogin(response.data.token));
          store.dispatch(fetchUserData());
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

      // Exécution de la requête
      api
        .post('/user/add', signUpJsonData)
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
      api
        .get('/user/me')
        .then((response) => {
          console.log(response.data);
          store.dispatch(
            saveUserData(
              response.data.firstname,
              response.data.lastname,
              response.data.email,
              response.data.avatarURL
            )
          );
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case FETCH_FRIENDS:
      api
        .get(`/friend`)
        .then((response) => {
          console.log('API Response:', response.data);
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
