// ici on placera les actions qui concernent l'utilisateur
export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const SUBMIT_LOGIN = 'SUBMIT_LOGIN';
export const HANDLE_SUCCESSFUL_LOGIN = 'HANDLE_SUCCESSFUL_LOGIN';

export const changeLoginField = (value, identifier) => ({
  type: CHANGE_LOGIN_FIELD,
  value,
  identifier,
});

export const submitLogin = () => ({
  type: SUBMIT_LOGIN,
});

export const handleSuccessfulLogin = (nickname, token) => ({
  type: HANDLE_SUCCESSFUL_LOGIN,
  nickname,
  token,
});
// Note : on peut aussi avoir logged en payload, ou alors le reducer se débrouille
// en mettant touours "true"
