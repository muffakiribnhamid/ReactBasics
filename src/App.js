import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import What from './components/What';
import Welcome from './components/Welcome'
import Message from './components/Message'
import Increment from './components/Increment'
import FetchData from './components/FetchData'

function App() {
  return (
    <div className="App">
      {/* <Greet name="muffakir" heroName="coder">
        <p>Hello World</p></Greet>
      <Greet name="salman" heroName="physics">
        <button>Hello sirrrrr</button></Greet>
      <Greet name="muddabir" heroName="biology"></Greet>

      <Welcome name="muffakir" heroName="anime"></Welcome> */}
      {/* <Message></Message> */}
      {/* <Message></Message> */}
      <FetchData/>

  

    </div>
  );
}

export default App;
