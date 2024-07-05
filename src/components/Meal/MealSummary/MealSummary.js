import React from 'react'
import classes from './MealSummary.module.css'

const MealSummary = () => {
  return (
    <div className={classes.mealSummy}>
        <h2 className={classes.summaryText}>Delicious Food, Delivered To You</h2>
        <p className={classes.summaryP}>Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home</p>
        <p className={classes.summaryP}>All our meals are cooked with high-quality ingredient, just-in-time and of course by experienced chefs!</p>
    </div>
  )
}

export default MealSummary