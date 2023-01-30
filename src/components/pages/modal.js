import '../styles/modal.css'

import React, {useState} from 'react'

import { createPortal } from 'react-dom'

const Modal = ({ isOpen, children, onClose, Closewelcome }) => {
    //if (isOpen) {
        //return null;
    //}


    const button = {
        width: '40px',
        fontSize: 20,
        color:'red'
    }


    return createPortal(
        <div>

            <div className="overlay" onClick={onClose}></div>
            <div className='modal-content'>

                <span onClick={Closewelcome}>As a doctor</span><br />
                {children}


            </div>

        </div>,

        document.getElementById('modal')
    );
}

export default Modal
