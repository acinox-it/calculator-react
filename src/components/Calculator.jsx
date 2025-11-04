import { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calculator = () => {
    const [input, setInput] = useState('');

    const handleClick = (value) => {
        if (value === 'C') return setInput('');
        if (value === '=') {
            try {
                setInput(eval(input).toString());
            } catch {
                setInput('Erreur');
            }
        } else {
            setInput((prev) => prev + value);
        }
    };

    const buttons = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'];

    return (
        <div className="bg-gray-900 p-4 rounded-lg max-w-sm mx-auto shadow-lg">
            <Display value={input} />
            <div className="grid grid-cols-4 gap-2 mt-4">
                {buttons.map((b) => (
                    <Button key={b} label={b} onClick={handleClick} />
                ))}
            </div>
        </div>

    );
};

export default Calculator;
