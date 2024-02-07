import HomePage from '../HomePage/HomePage';
import PopupButton from '../Reusable/Popups/PopupButton';
import PopupInput from '../Reusable/Popups/PopupInput';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PopupInput textContent="Nouveau compte" buttonContent="S'inscrire" />
      </header>
    </div>
  );
}

export default App;
