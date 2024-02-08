import Tag from '../Reusable/Tag/Tag';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tag text="Visite Culturelle" category="tag" />
        <Tag text="Lundi" category="day" />
        <Tag text="Crozon" category="city" />
        <Tag text="France" category="country" />
      </header>
    </div>
  );
}

export default App;
