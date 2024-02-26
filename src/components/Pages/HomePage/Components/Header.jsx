import React from 'react';
import './Header.scss';
import MockupMobile from '../../../../assets/MainMockupMobile.png';

const Header = () => {
  return (
    <div className="headerContent">
      <div className="headerContainer">
        <h1 className="mainTitle">
          Tu pars en groupe?
          <span>Organise ton prochain voyage en toute simplicité</span>
        </h1>
        <img
          className="mockup"
          src={MockupMobile}
          alt="mockup"
        />
      </div>
    </div>
  );
};

export default Header;
