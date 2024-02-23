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
  userUpdateSuccess,
  userUpdateFailure,
  USER_UPDATE_REQUEST,
  DELETE_USER,
  userDeleteSuccess,
  userDeleteFailure,
  clickLogout,
  FETCH_USER_BY_MAIL,
  saveUserResultData,
  ADD_FRIEND,
  loginError,
  signupError,
  USER_UPDATE_AVATAR,
  userUpdateAvatar,
  DELETE_FRIEND,
  friendsFetched,
} from '../actions/user';

import { fetchMyTrips } from '../actions/trip';
import api from '../api';

const userMiddleware = (store) => (next) => async (action) => {
  const { friendId } = action;

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
          store.dispatch(loginError('Email ou mot de passe invalide'));
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
          alert('Compte créé avec succès avec succès !');
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          store.dispatch(signupError('Un compte avec cet email existe déjà'));
        });

      break;

    case FETCH_USER_DATA:
      // on doit envoyer le JWT dans le header Authorization de la requête, pour
      // que le serveur nous fournisse NOS recettes préférées
      api
        .get('/user/me')
        .then((response) => {
          store.dispatch(
            saveUserData(
              response.data.firstname,
              response.data.lastname,
              response.data.email,
              response.data.avatarURL,
              response.data.id
            )
          );
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case FETCH_USER_BY_MAIL:
      const { searchUsersValue } = store.getState().user;
      const fetchUserByMailData = {
        email: searchUsersValue,
      };
      // on doit envoyer le JWT dans le header Authorization de la requête, pour
      // que le serveur nous fournisse NOS recettes préférées
      api
        .post('/user/search', fetchUserByMailData)
        .then((response) => {
          const firstName = response.data[0].firstname;
          const lastName = response.data[0].lastname;
          const { avatarURL } = response.data[0];
          const { email } = response.data[0];
          const userId = response.data[0].id;
          store.dispatch(
            saveUserResultData(firstName, lastName, avatarURL, email, userId)
          );
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case ADD_FRIEND:
      const addFriendData = {
        id: friendId,
      };
      // on doit envoyer le JWT dans le header Authorization de la requête, pour
      // que le serveur nous fournisse NOS recettes préférées
      api
        .post('/friend/add', addFriendData)
        .then((response) => {
          store.dispatch(friendsFetched(false));
          alert('Ami ajouté avec succès !');
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case DELETE_FRIEND:
      // on doit envoyer le JWT dans le header Authorization de la requête, pour
      // que le serveur nous fournisse NOS recettes préférées
      api
        .delete(`/friend/delete/${friendId}`)
        .then((response) => {
          store.dispatch(friendsFetched(false));
          alert('Ami supprimé avec succès !');
        })
        .catch((error) => {
          console.error(error);
        });
      break;

    case FETCH_FRIENDS:
      api
        .get(`/friend`)
        .then((response) => {
          store.dispatch(saveFriends(response.data));
          store.dispatch(friendsFetched(true));
        })
        .catch((error) => {
          console.error(error);
          // Gestion de l'erreur
        });
      break;

    case USER_UPDATE_REQUEST: {
      const userState = store.getState().user; // Get user state only once

      const updateUserData = {
        firstname: userState.firstnameValue,
        lastname: userState.lastnameValue,
        email: userState.email,
        password: userState.password,
      };

      api
        .put('/user/me/update', updateUserData)
        .then((response) => {
          // Traitez la réponse ici si nécessaire
          // Par exemple, dispatch des actions pour gérer les données mises à jour
          store.dispatch(userUpdateSuccess());
          // Vérifiez si avatarUpdate n'est pas vide
          if (userState.avatarUpdate) {
            // Si avatarUpdate n'est pas vide, appelez userUpdateAvatar
            store.dispatch(userUpdateAvatar());
          }
        })
        .catch((error) => {
          console.error(error);

          // Gestion de l'erreur
          if (error.response.status === 422) {
            store.dispatch(
              userUpdateFailure('Un compte existe déjà avec cet email')
            );
          }
        });

      break;
    }

    case USER_UPDATE_AVATAR: {
      const userState = store.getState().user; // Get user state only once

      const avatarData = {
        avatar: userState.avatarUpdate,
      };

      api
        .post('/user/me/add_avatar', avatarData)
        .then((response) => {
          // Traitez la réponse ici si nécessaire
          // Par exemple, dispatch des actions pour gérer les données mises à jour
          store.dispatch({ type: FETCH_USER_DATA });
        })
        .catch((error) => {
          console.error(error);
          // Gestion de l'erreur
          store.dispatch(userUpdateFailure(error));
        });

      break;
    }

    case DELETE_USER:
      try {
        // Effectuer la requête axios pour supprimer le compte utilisateur
        await api.delete('/user/delete');

        // Réinitialiser l'état de l'utilisateur
        store.dispatch(userDeleteSuccess('success'));
        store.dispatch(saveUserData('', '', '', ''));
        store.dispatch(clickLogout());
      } catch (error) {
        // Gestion des erreurs
        console.error('Erreur lors de la suppression du compte :', error);
        // Dispatchez une action d'échec si nécessaire
        store.dispatch(userDeleteFailure(error));
      }

      break;
    default:
  }

  next(action);
};

export default userMiddleware;
