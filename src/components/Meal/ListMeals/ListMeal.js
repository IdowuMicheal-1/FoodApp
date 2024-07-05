import React, { useRef, useState, useContext } from 'react';
import classes from './ListMeal.module.css';
import Input from '../../UI/Input/Input';
import CartContext from '../../../store/cart-context';

const ListMeal = (props) => {
    const ctxCart = useContext(CartContext);

    const [isValid, setIsValid] = useState(true);
    const amountInputRef = useRef();

    const cartFormSubmitted = (event) => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredInputAmount = +enteredAmount;
       

        if (enteredAmount.trim().length === 0 || enteredAmount.trim().length < 1) {
            setIsValid(false);
            return;
        }

        ctxCart.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: enteredInputAmount,
        });
    };

    return (
        <div>
            <div className={classes.mealInfo}>
                <div className={classes.mealText}>
                    <h4 className={classes.mealName}>{props.name}</h4>
                    <p className={classes.mealDescription}>{props.description}</p>
                    <p className={classes.mealPrice}>${props.price.toFixed(2)}</p>
                </div>
                <div>
                    <form className={classes.inputForm} onSubmit={cartFormSubmitted}>
                        <Input
                            ref={amountInputRef}
                            label={'Amount'}
                            input={{
                                id: 'amount',
                                type: 'number',
                                min: '1',
                                max: '10',
                                step: '1',
                                defaultValue: '1',
                            }}
                        />
                        <button className={classes.btnForm}>+ Add</button>
                        {!isValid && <p>Please enter a valid amount (1-10).</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ListMeal;
