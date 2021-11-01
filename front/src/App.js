import { useState } from 'react';
import Basket from './components/Basket/Basket';
import logo from './assets/logo.png'
import Body from './components/Body/Body';
import './App.css';


function App() {
  const [price, setPrice] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <Body onCalculPrice={(price) => setPrice(price)} />
      </div>
      <footer className="App-footer">
        <Basket price={price} />
      </footer>
    </div>
  );
}

export default App;
