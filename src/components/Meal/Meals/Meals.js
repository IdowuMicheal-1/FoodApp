import React ,{useContext} from 'react'
import MealSummary from '../MealSummary/MealSummary'
import classes from './Meals.module.css'
import ListMeal from '../ListMeals/ListMeal'
import CartContext from '../../../store/cart-context'

const Meals = () => {

  

  const MEALS = [
    {
        id:'n1',
        name:'Sushi',
        description:'Finest fish and veggies',
        price:22.99,
    },
    {
        id:'n2',
        name:'Schnitzel',
        description:'A german speciality',
        price:16.5,
    },
    {
        id:'n3',
        name:'Barbecue Burger',
        description:'American,raw,meaty',
        price:12.99,
    },
    {
        id:'n4',
        name:'Green Bowl',
        description:'Healthy...and green...',
        price:18.99,
    },
]

  return (
    <div>
      <MealSummary />
      <div className={classes.mealLi}>
      {MEALS.map((items) => (
        <ListMeal
        key={items.id}
        id={items.id}
        name={items.name}
        description={items.description}
        price={items.price}
       />
       ))}
       </div>
      
    </div>
  )
}

export default Meals