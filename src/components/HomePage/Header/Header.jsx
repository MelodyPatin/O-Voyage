import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <div className="headerContent">
      <h1 className="mainTitle">
        Tu pars en groupe?
        <span>Organise ton prochain voyage en toute simplicité</span>
      </h1>
      <img
        className="mockup"
        src="src/assets/MainMockupMobile.png"
        alt="mockup"
      />
    </div>
  );
};

export default Header;
