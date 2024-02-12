import ActivityAdd from '../Unique/TravelActivity/ActivityAddUpdate/ActivityAdd';
import ActivityUpdate from '../Unique/TravelActivity/ActivityAddUpdate/ActivityUpdate';
import TravelAdd from '../Unique/TravelActivity/TravelAddUpdate/TravelAdd';
import './App.scss';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ActivityAdd onDesktop />
      </header>
    </div>
  );
}

export default App;
