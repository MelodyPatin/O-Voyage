import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import HomePage from '../Pages/HomePage/HomePage';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Error from '../Pages/Error/Error';
import {
  updateLoggedOut,
  fetchUserData,
  handleSuccessfulLogin,
} from '../../actions/user';
import UserUpdate from '../Pages/User/UserUpdate';
import FriendList from '../Pages/Friend/FriendList/FriendList';
import FriendAdd from '../Pages/Friend/FriendAdd/FriendAdd';
import TravelAdd from '../Unique/TravelActivity/TravelAddUpdate/TravelAdd';
import TravelDetails from '../Pages/Travel/TravelDetails';
import Travelers from '../Pages/Travel/Travelers';
import TravelUpdate from '../Unique/TravelActivity/TravelAddUpdate/TravelUpdate';
import ActivityAdd from '../Unique/TravelActivity/ActivityAddUpdate/ActivityAdd';
import FAQ from '../Pages/FAQ/FAQ';
import LegalNotice from '../Pages/LegalNotice/LegalNotice';
import History from '../Pages/History/History';
import ActivityDetails from '../Pages/Travel/ActivityDetails';

function App() {
  const dispatch = useDispatch();

  const loggedOut = useSelector((state) => state.user.loggedOut);
  const logged = useSelector((state) => state.user.logged);

  const [redirectHome, setRedirectHome] = useState(false);

  useEffect(() => {
    // Redirigez vers le tableau de bord après la connexion réussie
    if (loggedOut && !redirectHome) {
      setRedirectHome(true);
    }
  }, [loggedOut, redirectHome]);

  useEffect(() => {
    // Mettez à jour l'état loggedOut après la redirection vers la page d'accueil
    if (redirectHome) {
      // Mettez loggedOut à false après la redirection
      // Vous pouvez utiliser une autre action ou un moyen pour mettre à jour loggedOut dans le state Redux
      // Par exemple, dispatchez une action pour mettre loggedOut à false dans votre reducer
      dispatch(updateLoggedOut(false));
      setRedirectHome(false);
    }
  }, [redirectHome, dispatch]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(handleSuccessfulLogin(token));
      dispatch(fetchUserData());
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {/* HomePage */}
        {redirectHome && <Navigate to="/home" replace />}

        <Routes>
          <Route path="/home/*" element={<HomePage />} />
          {logged && (
            <Route
              path="/dashboard"
              element={<Dashboard onDesktop={false} />}
            />
          )}
          {logged && <Route path="/me" element={<UserUpdate />} />}
          {logged && <Route path="/friends/*" element={<FriendList />} />}
          {logged && <Route path="/friends/add" element={<FriendAdd />} />}
          {logged && <Route path="/createtrip" element={<TravelAdd />} />}
          {logged && <Route path="/updatetrip" element={<TravelUpdate />} />}
          {logged && <Route path="/createactivity" element={<ActivityAdd />} />}
          {logged && <Route path="/trip/:id" element={<TravelDetails />} />}
          {logged && (
            <Route path="/trip/:id/travelers" element={<Travelers />} />
          )}
          <Route path="/faq" element={<FAQ />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/our-history" element={<History />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
