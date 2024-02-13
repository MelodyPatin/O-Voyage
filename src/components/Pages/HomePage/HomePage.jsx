// HomePage.jsx

import { React, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeLoginField, submitLogin, submitSignUp } from '../../../actions/user';
import NavBar from '../../Reusable/NavBarHeader/NavBarHeader';
import Header from './Header/Header';
import Presentation from './Presentation/Presentation';
import LastPart from './LastPart/LastPart';
import Footer from '../../Reusable/Footer/Footer';
import LogIn from './Popup/LogIn';
import SignUp from './Popup/SignUp';
import Dashboard from '../Dashboard/Dashboard';  // Import Dashboard component
import './HomePage.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const firstnameValue = useSelector((state) => state.user.firstname);
  const lastnameValue = useSelector((state) => state.user.lastname);
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const signUpEmailValue = useSelector((state) => state.user.signUpEmail);
  const signUpPasswordValue = useSelector((state) => state.user.signUpPassword);
  const logged = useSelector((state) => state.user.logged);
  const signedUp = useSelector((state) => state.user.signedUp);

  // Ajoutez un état local pour gérer la redirection
  const [redirectDashboard, setRedirectDashboard] = useState(false);
  const [redirectLogIn, setRedirectLogIn] = useState(false);

  useEffect(() => {
    // Redirigez vers le tableau de bord après la connexion réussie
    if (logged) {
      setRedirectDashboard(true);
    }
  }, [logged]);

  useEffect(() => {
    // Redirigez vers le tableau de bord après la connexion réussie
    if (signedUp) {
      setRedirectLogIn(true);
    }
  }, [signedUp]);

  return (
    <div className="homePage">
      <NavBar />
      <Header />
      <Presentation />
      <LastPart />
      <Footer />

      {redirectDashboard && <Navigate to="/dashboard" replace />}
      {redirectLogIn && <Navigate to="/home/login" replace />}

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
        <Route 
          path="/signup" 
          element={
            <SignUp 
              firstnameValue={firstnameValue}
              lastnameValue={lastnameValue}
              signUpEmailValue={signUpEmailValue}
              signUpPasswordValue={signUpPasswordValue}
              changeField={(newValue, identifier) => {
                const action = changeLoginField(newValue, identifier);
                dispatch(action);
              }}
              handleSignUp={() => {
                dispatch(submitSignUp());
              }}
            />
          } 
        />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
    </div>
  );
};

export default HomePage;
