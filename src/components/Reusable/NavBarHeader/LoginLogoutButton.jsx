import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

const LoginLogoutButton = () => {
  return (
    <div>
      <Button className="connectionButton" content="Se connecter" />
      <Button className="connectionButton" content="S'inscrire" />
    </div>
  );
};
LoginLogoutButton.propTypes = {};
export default LoginLogoutButton;
