import { Routes, Route } from 'react-router-dom';
//import Navbar from './layout/Navbar';
//import Home from './pages/Home';
import CalculatorPage from './pages/CalculatorPage';

function App() {
  return (
    <div className="w-full h-screen bg-gray-600 text-white flex justify-center">
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
      </Routes>
    </div>
  );
}

export default App;
