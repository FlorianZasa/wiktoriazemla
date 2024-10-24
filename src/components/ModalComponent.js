import React from 'react'
import './ModalComponent.css'
import useBodyScrollLock from '../utils/useBodyScrollLock';

function ModalComponent({ isOpen, onClose, children }) {
    useBodyScrollLock(isOpen);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export default ModalComponent