import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('');  // Initialize state with an empty string

  const handleInputChange = (e) => {
    setInputValue(e.target.value);  // Update state with the current input value
  };

  return (
    <>
     <div className="app-container">
      <h2>Input Mirror</h2>
      <input
        type="text"
        placeholder='Write text here'
        value={inputValue}
        onChange={handleInputChange}
        className="input-field"
      />
      <p className="output-text">Text Typed: {inputValue}</p>
    
    </div>
    
    </>
  );
}

export default App;