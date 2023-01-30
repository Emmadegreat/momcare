import '../styles/modal1.css'

import React from 'react'
import { createPortal } from 'react-dom'

const Modal1 = ({ Stop, children }) => {

    return createPortal(
        <div>
            <div className="overlay1" onClick={Stop}></div>
            <div className="modal-content1">
                <span onClick={Stop}>X</span>
                {children}
            </div>

        </div>,
        document.getElementById('modal1')
    );
}

export default Modal1
