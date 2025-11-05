import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import ScientificCalculator from './components/ScientificCalculator';
import Navbar from './layout/Navbar'

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Calculator />} />,
        <Route path="/scientific" element= {<ScientificCalculator />} />
      </Routes>
    </main>
  );
}

export default App;
