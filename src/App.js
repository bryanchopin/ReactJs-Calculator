import './App.css';
import Button  from './Components/Button';
import Display from './Components/Display';
import { useState } from 'react';
import {evaluate } from 'mathjs';

function App() {

  const [displayValue, setDisplayValue] = useState('0');


  const setValue = value => {
    setDisplayValue(displayValue + value);
  }

  const equalsValue = () => {
      displayValue ? setDisplayValue(evaluate(displayValue)) : alert("Enter a value");
  }


  return (
    <div className="App">
      <div className="Calculator">
        <div className="screen">
          <Display value={displayValue} ></Display >
        </div>
        <div className='keys'>
          <div className='row-4'>
            <Button getValue={setValue} >1</Button>
            <Button getValue={setValue} >2</Button>
            <Button getValue={setValue} >3</Button>
            <Button getValue={setValue} >+</Button>
          </div>
          <div className='row-4'>
            <Button getValue={setValue} >4</Button>
            <Button getValue={setValue} >5</Button>
            <Button getValue={setValue} >6</Button>
            <Button getValue={setValue} >-</Button>
          </div>
          <div className='row-4'>
            <Button getValue={setValue} >7</Button>
            <Button getValue={setValue} >8</Button>
            <Button getValue={setValue} >9</Button>
            <Button getValue={setValue} >*</Button>
          </div>
          <div className='row-4'>
            <Button getValue={equalsValue} >=</Button>
            <Button getValue={setValue} >0</Button>
            <Button getValue={setValue} >.</Button>
            <Button getValue={setValue} >/</Button>
          </div>
          <div className='row-4'>
            <Button resetValue={() => { setDisplayValue('') }}>Clear</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
