import Error from '../Pages/Error/Error';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Error
          number="ERREUR 404"
          textContent="Désolé, la page que vous recherchez n'existe pas. Veuillez vérifier l'URL et réessayer."
        />
      </header>
    </div>
  );
}

export default App;
