import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Modal = (props) => {
    const Backdrop = (props) => {
        return (
            <div className={classes.backDrop}></div>
        )
    }
    const ModalOvelay = (props) => {
        return (
            <div>
                <div className={classes.cartModal}>{props.children}</div>
            </div>
        )
    }
  return (
    <div>
        {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,document.getElementById('overlays'))}
        {ReactDOM.createPortal(<ModalOvelay>{props.children}</ModalOvelay>,document.getElementById('overlays'))}
    </div>
  )
}

export default Modal