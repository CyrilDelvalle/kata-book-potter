// import logo from './logo.svg';
import BookList from './components/BookList/BookList';
import Basket from './components/Basket/Basket';
import BookDescription from './components/BookDescription/BookDescription';
import logo from './assets/logo.png'
import './App.css';
import { useState } from 'react';


function App() {
  const [price, setPrice] = useState(0)
  const [description, setDescription] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <BookList onSetDescription={(desc) => setDescription(desc)} onCalculPrice={(price) => setPrice(price)} />
        <BookDescription description={description} />
      </div>
      <footer className="App-footer">
        <Basket price={price} />
      </footer>
    </div>
  );
}

export default App;
