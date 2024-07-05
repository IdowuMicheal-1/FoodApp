import React from 'react'
import classes from './Input.module.css'

const Input = React.forwardRef((props,ref) => {
  return (
    <div className={classes.topInput}>
        <label htmlFor={props.input.id} className={classes.label}>{props.label}</label>
        <input {...props.input} className={classes.input} ref={ref}/>
    </div>
  )
})

export default Input