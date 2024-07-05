import React, {useReducer} from "react";
import CartContext from "./cart-context";

const defaultCartItem = {
    items:[],
    totalAmount:0,
}

const cartReducer=(state,action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount=state.totalAmount + action.items.price * action.items.amount;
        const existingCartItemsIndex=state.items.findIndex((item) => item.id === action.items.id)
        const existingCartItem=state.items[existingCartItemsIndex]
     
        let updatedItems
        if (existingCartItem) {
            const updatedItem={
                ...existingCartItem,
                amount:existingCartItem.amount + action.items.amount
            };
            updatedItems=[...state.items];
            updatedItems[existingCartItemsIndex]=updatedItem
        } else{
            updatedItems=state.items.concat(action.items);
        }
        
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount,
        } 
    }

    if (action.type === 'REMOVE') {
        
        const existingCartItemsIndex = state.items.findIndex((item) => item.id === action.id)
        const existingCartItem =state.items[existingCartItemsIndex]
        const updatedTotalAmount = state.totalAmount - existingCartItem.price
        let updatedItems;
        if (existingCartItem.amount===1) {
            updatedItems=state.items.filter((item) => item.id !== action.id )
        }
        else {
            const updatedItem = {...existingCartItem, amount:existingCartItem.amount -1}
            updatedItems = [...state.items];
            updatedItems[existingCartItemsIndex] = updatedItem
        }
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    return defaultCartItem
}
const CartProvider = (props) => {
    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultCartItem);

    const addItemToCartHandler = (items) => {
        dispatchCartAction({
            type:'ADD',
            items:items
        })
    }
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type:'REMOVE',
            id:id,
        })
    }
    const cartItem = {
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }
    return (
        <CartContext.Provider value={cartItem}>
            {props.children}
        </CartContext.Provider>

    )
}

export default CartProvider;