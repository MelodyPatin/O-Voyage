import './App.scss';
import TravelDetails from '../Pages/Travel/TravelDetails/TravelDetails';
import Travellers from '../Pages/Travel/Travellers/Travellers';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TravelDetails onDesktop />
      </header>
    </div>
  );
}

export default App;
