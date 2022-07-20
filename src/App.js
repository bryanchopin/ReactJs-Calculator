import './App.css';
import Button  from './Components/Button';


function App() {
  return (
    <div className="App">
      <div className="Calculator">
        <div className="display">

        </div>
        <div className='keys'>
          <div className='row-4'>
            <Button>1</Button>
          </div>
          <div className='row-4'>
            <Button>2</Button>
          </div>
          <div className='row-4'>
            <Button>3</Button>
          </div>
          <div className='row-4'>
            <Button>4</Button>
          </div>
          <div className='row-4'>
            <Button>Clear</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
