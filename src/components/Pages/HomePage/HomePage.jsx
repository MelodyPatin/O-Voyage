// HomePage.jsx

import { React, useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import NavBar from '../../Reusable/NavBarHeader/NavBarHeader';
import Header from './Components/Header';
import Presentation from './Components/Presentation';
import LastPart from './Components/LastPart';
import Footer from '../../Reusable/Footer/Footer';
import LogIn from './Components/Popup/LogIn';
import SignUp from './Components/Popup/SignUp';
import Dashboard from '../Dashboard/Dashboard';

import {
  changeLoginField,
  submitLogin,
  submitSignUp,
} from '../../../actions/user';

import './HomePage.scss';

const HomePage = () => {
  const dispatch = useDispatch();
  const firstnameValue = useSelector((state) => state.user.firstnameValue);
  const lastnameValue = useSelector((state) => state.user.lastnameValue);
  const emailValue = useSelector((state) => state.user.email);
  const passwordValue = useSelector((state) => state.user.password);
  const signUpEmailValue = useSelector((state) => state.user.signUpEmail);
  const signUpPasswordValue = useSelector((state) => state.user.signUpPassword);
  const logged = useSelector((state) => state.user.logged);
  const signedUp = useSelector((state) => state.user.signedUp);

  // Add local state to manage redirection
  const [redirectDashboard, setRedirectDashboard] = useState(false);
  const [redirectLogIn, setRedirectLogIn] = useState(false);

  // Redirect to the dashboard after successful login
  useEffect(() => {
    if (logged) {
      setRedirectDashboard(true);
    }
  }, [logged]);

  // Redirect to the login page after successful signup
  useEffect(() => {
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

      {/* Conditional Redirects */}
      {redirectDashboard && <Navigate to="/dashboard" replace />}
      {redirectLogIn && <Navigate to="/login" replace />}

      {/* Routes for Login, Signup, and Dashboard */}
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
