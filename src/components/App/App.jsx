import './App.scss';
import TravelUpdate from '../Unique/TravelActivity/TravelAddUpdate/TravelUpdate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TravelUpdate contentReturnTitle={'Modifiez le voyage'} />
      </header>
    </div>
  );
}

export default App;