import React from 'react';

function Modal() {
    return (
        <div className='modalBackdrop bg-c-black min-h-screen'>
            <div className='modalContainer bg-c-white'>
                <h3 className='modalTitle'>Resume</h3>
                <img alt='current category' />
                <p>
                    My resume is
                </p>
                <button type='button'>
                    Close this modal
                </button>
            </div>
        </div>
    );
};

export default Modal;