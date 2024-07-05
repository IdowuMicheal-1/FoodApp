import React, { useContext, useEffect } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';
import { CartDetails } from '../CartDetails/CartDetails';

const Cart = (props) => {

  const cartItems = useContext(CartContext);
  const hasItem = cartItems.items.length > 0;
  
  const cartRemoveHandler = id => {cartItems.removeItem(id)}
  const cartAddHandler = item => {cartItems.addItem({...item,amount:1})}
 
  const cartitems = <ul>{cartItems.items.map((items) => <li><CartDetails key={items.id} name={items.name} price={items.price} amount={items.amount} onRemove={cartRemoveHandler.bind(null,items.id)} onAdd={cartAddHandler.bind(null,items)}/></li>)}</ul>;
  return (
    <Modal onClose={props.onCloseCart}>
      {cartitems}
      <div className={classes.cartDetail}>
        <span className={classes.amount}>Total Amount</span>
        <span className={classes.price}>${+cartItems.totalAmount.toFixed(2)}</span>

      </div>
      <div className={classes.cartBtn}>
        <button className={classes.btnClose} onClick={props.onCloseCart}>Close</button>
        {hasItem && <button className={classes.btnOrder}>Order</button>}

      </div>
    </Modal>
  )
}

export default Cart