import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from '../Pages/HomePage/HomePage';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Error from '../Pages/Error/Error';
import UserUpdate from '../Pages/User/UserUpdate';
import FriendList from '../Pages/Friend/FriendList/FriendList';
import FriendAdd from '../Pages/Friend/FriendAdd/FriendAdd';
import TravelAdd from '../Pages/Travel/TravelAddUpdate/TravelAdd';
import TravelDetails from '../Pages/Travel/Details/TravelDetails';
import Travelers from '../Pages/Travel/Travelers/Travelers';
import TravelUpdate from '../Pages/Travel/TravelAddUpdate/TravelUpdate';
import ActivityAdd from '../Pages/Travel/Activity/ActivityAddUpdate/ActivityAdd';
import FAQ from '../Pages/FAQ/FAQ';
import LegalNotice from '../Pages/LegalNotice/LegalNotice';
import History from '../Pages/History/History';
import ActivityDetails from '../Pages/Travel/Activity/ActivityDetails/ActivityDetails';
import ActivityUpdate from '../Pages/Travel/Activity/ActivityAddUpdate/ActivityUpdate';
import Filters from '../Pages/Travel/Activity/Filters/Filters';
import Gallery from '../Pages/Travel/Gallery/Gallery';
import FullSizePhoto from '../Pages/Travel/Gallery/FullSizePhoto';
import AddTravelers from '../Pages/Travel/Travelers/AddTravelers';
import Suitcase from '../Pages/Travel/Suitcase/Suitcase';
import {
  updateLoggedOut,
  fetchUserData,
  handleSuccessfulLogin,
} from '../../actions/user';

function App() {
  const dispatch = useDispatch();
  const loggedOut = useSelector((state) => state.user.loggedOut);
  const logged = useSelector((state) => state.user.logged);
  const navigate = useNavigate();

  const [redirectHome, setRedirectHome] = useState(false);

  useEffect(() => {
    if (loggedOut && !redirectHome) {
      setRedirectHome(true);
    }
  }, [loggedOut, redirectHome]);

  useEffect(() => {
    if (redirectHome) {
      dispatch(updateLoggedOut(false));
      setRedirectHome(false);
      navigate('/');
    }
  }, [redirectHome, dispatch, navigate]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(handleSuccessfulLogin(token));
      dispatch(fetchUserData());
    }
  }, []);

  const renderPrivateRoute = (path, element) => {
    return logged ? <Route path={path} element={element} /> : <Route path={path} element={<Navigate to="/" />} />;
  };  

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          {/* Routes publiques accessibles en tout temps */}
          <Route path="/*" element={<HomePage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="/our-history" element={<History />} />
          <Route path="*" element={<Error />} />
          
          {/* Routes privées nécessitant une connexion */}
          {renderPrivateRoute('/dashboard', <Dashboard />)}
          {renderPrivateRoute('/me', <UserUpdate />)}
          {renderPrivateRoute('/friends', <FriendList />)}
          {renderPrivateRoute('/friends/add', <FriendAdd />)}
          {renderPrivateRoute('/createtrip', <TravelAdd />)}
          {renderPrivateRoute('/updatetrip/:tripId', <TravelUpdate />)}
          {renderPrivateRoute('/createactivity', <ActivityAdd />)}
          {renderPrivateRoute(
            '/trip/:tripId/activity/:activityId',
            <ActivityDetails />
          )}
          {renderPrivateRoute(
            '/trip/:tripId/updateactivity/:activityId',
            <ActivityUpdate />
          )}
          {renderPrivateRoute('/trip/:tripId', <TravelDetails />)}
          {renderPrivateRoute('/trip/:tripId/travelers', <Travelers />)}
          {renderPrivateRoute('/trip/:tripId/addtravelers', <AddTravelers />)}
          {renderPrivateRoute('/trip/:tripId/filters', <Filters />)}
          {renderPrivateRoute('/trip/:tripId/gallery', <Gallery />)}
          {renderPrivateRoute(
            '/trip/:tripId/gallery/photo',
            <FullSizePhoto />
          )}
          {renderPrivateRoute('/trip/:tripId/suitcase', <Suitcase />)}
        </Routes>
      </header>
    </div>
  );
}

export default App;
