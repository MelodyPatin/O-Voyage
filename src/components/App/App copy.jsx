import ActivityCard from '../Reusable/ActivityCard/ActivityCard';
import Footer from '../Reusable/Footer/Footer';
import IconButton from '../Reusable/IconButton/IconButton';
import LabelInput from '../Reusable/LabelInput/LabelInput';
import NavBarNico from '../Reusable/NavBarNico/NavBarNico';
import SimpleButton from '../Reusable/SimpleButton/SimpleButton';
import TravelersList from '../Reusable/TravelersList/TravelersList';
import User from '../Reusable/User/User';
import HomePage from '../Pages/HomePage/HomePage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HomePage />
      </header>
    </div>
  );
}

export default App;
