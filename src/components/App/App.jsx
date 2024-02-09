import './App.scss';
import TravelAddUpdate from '../Pages/TravelActivity/TravelAddUpdate/TravelAddUpdate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TravelAddUpdate contentReturnTitle={'Nouveau voyage'} />
      </header>
    </div>
  );
}

export default App;