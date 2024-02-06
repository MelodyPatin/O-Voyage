import ActivityCard from '../Reusable/ActivityCard/ActivityCard';
import Footer from '../Reusable/Footer/Footer';
import IconButton from '../Reusable/IconButton/IconButton';
import SimpleButton from '../Reusable/SimpleButton/SimpleButton';
import TravelersList from '../Reusable/TravelersList/TravelersList';
import User from '../Reusable/User/User';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Simple Button</p>
      <SimpleButton textContent='Continuer'/>
      <p>Icon Button</p>
      <IconButton icon="trash" textContent='Supprimer'/>
      <p>User</p>
      <User firstName="Nicolas" lastName='Guillotte'/>
      <p>Activity Card</p>
      <ActivityCard />
      <p>Travelers List</p>
      <TravelersList />
      <p>Footer</p>
      <Footer />
      </header>
    </div>
  );
}

export default App;
