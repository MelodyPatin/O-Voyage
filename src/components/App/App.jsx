import './App.scss';
import HomePage from '../Pages/HomePage/HomePage';
import UserUpdate from '../Pages/User/UserUpdate';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserUpdate onDesktop />
      </header>
    </div>
  );
}

export default App;
