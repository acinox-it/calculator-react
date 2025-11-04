import { Routes, Route } from 'react-router-dom';
//import Navbar from './layout/Navbar';
//import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-600 text-white">
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
      </Routes>
    </div>
  );
}

export default App;
