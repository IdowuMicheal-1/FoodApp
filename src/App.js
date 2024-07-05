import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Layout/Header/Header';
import Meals from './components/Meal/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [showCart, setShowCart]=useState(false);

  const showCartHandler = () => {
    setShowCart(true)
  }

  const closeCartHandler= () => {
    setShowCart(false)
  }
  return (
    
      <CartProvider>
      {showCart && <Cart onCloseCart={closeCartHandler}/>}
      <Header  onChangeCart={showCartHandler}/>
      <main>
        <Meals />
      </main>
      </CartProvider>
  
  );
}

export default App;
