import Footer from '../Reusable/Footer/Footer';
import IconButton from '../Reusable/IconButton/IconButton';
import SimpleButton from '../Reusable/SimpleButton/SimpleButton';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Simple Button</p>
      <SimpleButton textContent='Continuer'/>
      <p>Icon Button</p>
      <IconButton icon="trash" textContent='Supprimer'/>
      <p>Footer</p>
      <Footer />
      </header>
    </div>
  );
}

export default App;
