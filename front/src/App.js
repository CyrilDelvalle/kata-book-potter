import logo from './logo.svg';
import BookList from './components/BookList/BookList';
import Basket from './components/Basket/Basket';
import './App.css';
import { useState } from 'react';


function App() {
  const [price, setPrice] = useState(0)

  const calculPrice = (price) => {
    setPrice(price)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <BookList onCalculPrice={calculPrice} />
        <Basket price={price} />
      </header>
    </div>
  );
}

export default App;
