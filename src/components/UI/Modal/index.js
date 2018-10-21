import React from 'react';

import classes from './Modal.css';
import Aux from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop';

const Modal = ({children, show, closeModal}) => (
    <Aux>
        <Backdrop
            show={show}
            click={closeModal}
        />
        <div
            className={classes.Modal}
            style={{
                transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: show ? '1' : '0'
            }}
        >
            {children}
        </div>
    </Aux>
);

export default Modal;