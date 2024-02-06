import Footer from '../Reusable/Footer/Footer';
import SimpleButton from '../Reusable/SimpleButton/SimpleButton';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Simple Button</p>
      <SimpleButton textContent='Heeeyyy'/>
      <p>Footer</p>
      <Footer />
      </header>
    </div>
  );
}

export default App;
