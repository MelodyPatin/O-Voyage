import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import HomePage from '../Pages/HomePage/HomePage';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Error from '../Pages/Error/Error';
import { updateLoggedOut } from '../../actions/user';
import UserUpdate from '../Pages/User/UserUpdate';
import FriendList from '../Pages/Friend/FriendList/FriendList';
import FriendAdd from '../Pages/Friend/FriendAdd/FriendAdd';
import TravelAdd from '../Unique/TravelActivity/TravelAddUpdate/TravelAdd';
import TravelDetails from '../Pages/Travel/TravelDetails';
import Travelers from '../Pages/Travel/Travelers';
import ActivityDetails from '../Pages/Travel/ActivityDetails';

function App() {
  const dispatch = useDispatch();

  const logged = localStorage.getItem('logged');
  const loggedOut = useSelector((state) => state.user.loggedOut);
  const firstName = localStorage.getItem('firstname');
  const loggedState = useSelector((state) => state.user.loggedState);

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

  return (
    <div className="App">
      <header className="App-header">
        {/* HomePage */}
        {redirectHome && <Navigate to="/home" replace />}

        <Routes>
          <Route path="/home/*" element={<HomePage />} />
          {(logged === 'true' || loggedState) && (
            <Route
              path="/dashboard"
              element={<Dashboard onDesktop={false} />}
            />
          )}
          {(logged === 'true' || loggedState) && (
            <Route path="/me" element={<UserUpdate />} />
          )}
          {(logged === 'true' || loggedState) && (
            <Route path="/friends/*" element={<FriendList />} />
          )}
          {(logged === 'true' || loggedState) && (
            <Route path="/friends/add" element={<FriendAdd />} />
          )}
          {(logged === 'true' || loggedState) && (
            <Route path="/createtrip" element={<TravelAdd />} />
          )}
          {(logged === 'true' || loggedState) && (
            <Route path="/travel/:id" element={<TravelDetails />} />
          )}
          {(logged === 'true' || loggedState) && (
            <Route path="/travel/:id/travelers" element={<Travelers />} />
          )}
          <Route path="*" element={<Error />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
