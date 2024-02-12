import TravelDetails from '../Pages/Travel/TravelDetails/TravelDetails';
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
        <TravelDetails onDesktop Travel />
      </header>
    </div>
  );
}

export default App;
