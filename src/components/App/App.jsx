import ActivityAdd from '../Unique/TravelActivity/ActivityAddUpdate/ActivityAdd';
import ActivityUpdate from '../Unique/TravelActivity/ActivityAddUpdate/ActivityUpdate';
import TravelAdd from '../Unique/TravelActivity/TravelAddUpdate/TravelAdd';
import './App.scss';
import TravelDetails from '../Pages/Travel/TravelDetails/TravelDetails';
import ActivityResume from '../Pages/ActivityResume/ActivityResume';
import UserUpdate from '../Pages/User/UserUpdate';
import FriendList from '../Pages/Friend/FriendList/FriendList';
import Dashboard from '../Pages/Dashboard/Dashboard';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
