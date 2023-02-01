import '../styles/modal2.css'

import React from 'react'
import { createPortal } from 'react-dom'

const Modal2 = ({ closedPass, children }) => {

    return createPortal(
        <div>
            <div className="overlay2" onClick={ closedPass}></div>
            <div className="modal-content2">
                {children}
            </div>

        </div>,
        document.getElementById('modal2')
    );
}

export default Modal2
