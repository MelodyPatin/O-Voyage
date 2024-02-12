import axios from 'axios';
import { SUBMIT_LOGIN, handleSuccessfulLogin } from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      const { email, password } = store.getState().user;

      // Données à envoyer au format JSON
      const jsonData = {
        username: email,
        password,
      };

      // Configuration de la requête Axios
      // eslint-disable-next-line no-case-declarations
      const requestOptions = {
        method: 'POST',
        url: 'http://localhost:8001/api/login_check',
        headers: {
          'Content-Type': 'application/json',
        },
        data: jsonData,
      };

      // Exécution de la requête
      axios(requestOptions)
        .then((response) => {
          // Traitement de la réponse
          console.log(response);
          store.dispatch(
            handleSuccessfulLogin(response.data.pseudo, response.data.token)
          );
        })
        .catch((error) => {
          console.error('Erreur lors de la requête:', error);
          // Dispatch d'une action pour gérer l'erreur
        });

      break;

    default:
  }

  next(action);
};

export default userMiddleware;
