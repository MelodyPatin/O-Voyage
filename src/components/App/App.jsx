import { Route, Routes } from 'react-router-dom';

import './App.scss';
import HomePage from '../Pages/HomePage/HomePage';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Error from '../Pages/Error/Error';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* HomePage */}
        {/* Dashboard */}
        {/* TravelDetail */}
        <Routes>
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
