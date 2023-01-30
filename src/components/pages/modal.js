import '../styles/modal.css'

import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ children, onClose, Closewelcome }) => {

    const button = {
        width: '40px',
        fontSize: 20,
        color:'red'
    }


    return createPortal(
        <div>

            <div className="overlay" onClick={onClose}></div>
            <div className='modal-content'>

                {children}

            </div>

        </div>,

        document.getElementById('modal')
    );
}

export default Modal
