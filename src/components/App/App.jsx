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

function App() {
  const dispatch = useDispatch();

  const logged = useSelector((state) => state.user.logged);
  const loggedOut = useSelector((state) => state.user.loggedOut);
  const firstName = useSelector((state) => state.user.firstname);

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
  }, [redirectHome]);

  return (
    <div className="App">
      <header className="App-header">
        {/* HomePage */}
        {redirectHome && <Navigate to="/home" replace />}

        <Routes>
          <Route path="/home/*" element={<HomePage />} />
          {logged && <Route path="/dashboard" element={<Dashboard />} />}
          {logged && <Route path={`/${firstName}`} element={<UserUpdate />} />}
          {logged && <Route path="/friends/*" element={<FriendList />} />}
          {logged && <Route path="/friends/add" element={<FriendAdd />} />}
          <Route path="*" element={<Error />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
