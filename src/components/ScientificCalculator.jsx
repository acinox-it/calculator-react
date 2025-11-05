import { useState } from 'react';
import Display from './Display';
import Button from './Button';

const ScientificCalculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === 'C') return setInput('');
    if (value === '=') {
      try {
        const replaced = input
          .replace(/π/g, Math.PI)
          .replace(/√/g, 'Math.sqrt')
          .replace(/\^/g, '**')
          .replace(/%/g, '/100');
        setInput(eval(replaced).toString());
      } catch {
        setInput('Erreur');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    '(', ')', 'π', '√',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '^', '+',
    '%', 'C', '=', 
  ];

  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center pt-20">
      <section className="h-[75vh] w-full max-w-md px-4 flex items-center justify-center">
        <div className="bg-gray-700 p-6 rounded-xl shadow-xl w-full">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-yellow-400 text-center">Calculatrice scientifique</h1>
          </header>
          <Display value={input} />
          <div className="grid grid-cols-4 gap-6 mt-8">
            {buttons.map((b) => (
              <Button key={b} label={b} onClick={handleClick} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ScientificCalculator;
