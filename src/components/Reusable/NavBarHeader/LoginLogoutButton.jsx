import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';

const LoginLogoutButton = () => {
  return (
    <div className="buttonContainer">
      <Button
        className="connectionButton"
        as={Link}
        to="/home/login"
        content="Se connecter"
      />
      <Button
        className="connectionButton"
        as={Link}
        to="/home/signin"
        content="S'inscrire"
      />
    </div>
  );
};

export default LoginLogoutButton;
