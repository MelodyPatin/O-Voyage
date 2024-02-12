// HomePage.jsx

import { React, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeLoginField, submitLogin } from '../../../actions/user';
import NavBar from '../../Reusable/NavBarHeader/NavBarHeader';
import Header from './Header/Header';
import Presentation from './Presentation/Presentation';
import LastPart from './LastPart/LastPart';
import Footer from '../../Reusable/Footer/Footer';
import LogIn from './Popup/LogIn';
import SignIn from './Popup/SignIn';
import './HomePage.scss';

const HomePage = () => {
  // Initialisez les variables nécessaires pour la gestion de l'authentification
  const dispatch = useDispatch();
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const logged = useSelector((state) => state.user.logged);

  return (
    <div className="homePage">
      <NavBar />
      <Header />
      <Presentation />
      <LastPart />
      <Footer />

      <Routes>
        <Route
          path="/login"
          element={
            <LogIn
              emailValue={emailValue}
              passwordValue={passwordValue}
              changeField={(newValue, identifier) => {
                const action = changeLoginField(newValue, identifier);
                dispatch(action);
              }}
              handleLogin={() => {
                dispatch(submitLogin());
              }}
              handleLogout={() => {
                console.log('handleLogout');
                // TODO: Effacez le pseudo et le token dans le state, et passez logged à false
                // Dispatchez une action traitée par le reducer user
              }}
              isLogged={logged}
            />
          }
        />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </div>
  );
};

export default HomePage;
