import { useRef } from 'react';
import './App.css';

function App() {
  const inputUseRef = useRef(null)
  function handleOnClickBtn(){
    inputUseRef.current.click();
  }
  return (
    <div className="App">
      <input type ='file'
      ref={inputUseRef}
      ></input>
      <button onClick={handleOnClickBtn}>pick the file</button>
    </div>
  );
}

export default App;
