import React, {useContext} from 'react'
import { IoCartOutline } from "react-icons/io5";
import MealImg from '../../../assets/Meal.jpg'
import classes from './Header.module.css'
import CartContext from '../../../store/cart-context';

export const Header = (props) => {
  const ctxCart=useContext(CartContext);
  // const numbersOfCartItems=ctxCart.items.reduce((total,items) => {
  //   return total + items.amount;
  // },0)
  const numbersOfCartItems=ctxCart.items.reduce((total,items) => {
    return total + items.amount;
  },0)
 
  return (
    <div className={classes.topHeader}>
        <div className={classes.navBar}>
            <h1 className={classes.NavText}>TimMeals</h1>
            <button className={classes.btnCart} onClick={props.onChangeCart}><IoCartOutline />Cart <span className={classes.cartValue}>{numbersOfCartItems}</span></button>
        </div>
        <div className={classes.heroImg}>
           <img src={MealImg} alt='Hero' className={classes.heroStyle}/>
        </div>
    </div>
  )
}