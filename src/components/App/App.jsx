import { Popup } from 'semantic-ui-react';
import NavBarHeader from '../Reusable/NavBarHeader/NavBarHeader';
import './App.scss';
import PopupInput from '../Reusable/Popups/PopupInput';
import TravelCard from '../Reusable/TravelCard/TravelCard';
import TravelersList from '../Reusable/TravelersList/TravelersList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TravelersList />
      </header>
    </div>
  );
}

export default App;