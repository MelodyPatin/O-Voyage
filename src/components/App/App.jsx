import './App.scss';
import TravelDetails from '../Pages/Travel/TravelDetails/TravelDetails';
import ActivityResume from '../Pages/ActivityResume/ActivityResume';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TravelDetails onDesktop Activity />
      </header>
    </div>
  );
}

export default App;
