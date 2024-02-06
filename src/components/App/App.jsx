import ActivityCard from '../Reusable/ActivityCard/ActivityCard';
import Footer from '../Reusable/Footer/Footer';
import IconButton from '../Reusable/IconButton/IconButton';
import LabelInput from '../Reusable/LabelInput/LabelInput';
import NavBarNico from '../Reusable/NavBarNico/NavBarNico';
import SimpleButton from '../Reusable/SimpleButton/SimpleButton';
import TravelersList from '../Reusable/TravelersList/TravelersList';
import User from '../Reusable/User/User';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Navbar</p>
        <NavBarNico />
        <p>Simple Button</p>
        <SimpleButton textContent="Continuer" />
        <p>Icon Button</p>
        <IconButton icon="trash" textContent="Supprimer" />
        <p>User</p>
        <User firstName="Nicolas" lastName="Guillotte" />
        <p>Activity Card</p>
        <ActivityCard />
        <p>Travelers List</p>
        <TravelersList />
        <p>Label input</p>
        <LabelInput label="Renseignez le coût moyen" placeholder="votre texte" value="" />
        <LabelInput label="Test 2" placeholder="f" value="coucou" />
        <LabelInput label="Test 3" placeholder="f" value="coucou" />
        <p>Footer</p>
        <Footer />
      </header>
    </div>
  );
}

export default App;
