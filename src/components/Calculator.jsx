import React, { useState } from 'react';
import "../styles/calci.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareRootAlt, faPercentage, faPlusMinus } from '@fortawesome/free-solid-svg-icons';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const calculateResult = () => {
    try {
      setResult(eval(input).toString());
    } catch (error) {
      setResult('Error');
    }
  };

  const scientificOperations = {
    'sqrt': () => setInput((prev) => `Math.sqrt(${prev})`),
    '%': () => setInput((prev) => `${prev}/100`),
    '+/-': () => setInput((prev) => `-${prev}`),
  };

  const handleScientificClick = (operation) => {
    if (scientificOperations[operation]) {
      scientificOperations[operation]();
    }
  };

  return (
    <div className="max-w-xs mx-auto bg-gray-800 p-4 rounded-lg shadow-lg mt-10">
      <div className="text-right text-white text-2xl mb-4">
        <div>{input || '0'}</div>
        <div className="text-gray-500 text-lg">{result}</div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <button onClick={clearInput} className="button-clear">C</button>
        <button onClick={() => handleScientificClick('+/-')} className="button">
          <FontAwesomeIcon icon={faPlusMinus} />
        </button>
        <button onClick={() => handleScientificClick('%')} className="button">
          <FontAwesomeIcon icon={faPercentage} />
        </button>
        <button onClick={() => handleClick('/')} className="button">/</button>

        <button onClick={() => handleClick('7')} className="button">7</button>
        <button onClick={() => handleClick('8')} className="button">8</button>
        <button onClick={() => handleClick('9')} className="button">9</button>
        <button onClick={() => handleClick('*')} className="button">*</button>

        <button onClick={() => handleClick('4')} className="button">4</button>
        <button onClick={() => handleClick('5')} className="button">5</button>
        <button onClick={() => handleClick('6')} className="button">6</button>
        <button onClick={() => handleClick('-')} className="button">-</button>

        <button onClick={() => handleClick('1')} className="button">1</button>
        <button onClick={() => handleClick('2')} className="button">2</button>
        <button onClick={() => handleClick('3')} className="button">3</button>
        <button onClick={() => handleClick('+')} className="button">+</button>

        <button onClick={() => handleClick('0')} className="button">0</button>
        <button onClick={() => handleClick('.')} className="button">.</button>
        <button onClick={calculateResult} className="button-equal">=</button>
        <button onClick={() => handleScientificClick('sqrt')} className="button">
          <FontAwesomeIcon icon={faSquareRootAlt} />
        </button>
      </div>
    </div>
  );
};

export default Calculator;
