
import './App.css';
import {useState} from 'react'
let m = Math.random();
m = Math.floor(m*10)+1;
function App() {
  const[n, guess] = useState("");
  const[count, newCount] = useState(1)

  function handlechange(event){
    guess(event.target.value)
    console.log(n)
  }

  function handleClick(){
    if((m > n)){
      alert("Enter the greater Number")
      newCount(count + 1)
      return 
    }
    else if(m < n){
      alert("Enter the smaller number")
        newCount(count + 1)
    }
    else {
      newCount(count + 1)
      alert("Congrats , you guss the luckey number in "+ count+"attempts")
    }
  }
  return (
    <div className="App">
      <input
      className='inp'
      placeholder='Guess the value'
      onChange={handlechange}
      value={n}
      type='number'
      maxLength="1"
      />
      <button onClick={handleClick}>Match Number</button>
    </div>
  );
}

export default App;
