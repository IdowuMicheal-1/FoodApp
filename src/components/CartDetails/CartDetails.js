import React,{useEffect} from 'react'
import classes from './CartDetails.module.css'

export const CartDetails = (props) => {
 
  return (
    <div className={classes.dtDiv}>
        <h4 className={classes.detailText}>{props.name}</h4>
        <div className={classes.cartDiv}>
            <div className={classes.cartT}>
                <p className={classes.detailPrice}>${props.price}</p>
                <div className={classes.detailAmount}>x{props.amount}</div>
            </div>
            <div className={classes.btnStyle}>
                
                <button className={classes.addBtn} onClick={props.onRemove}>-</button>
                <button className={classes.addBtn} onClick={props.onAdd}>+</button>
            </div>
        </div>
        
    </div>
  )
}
