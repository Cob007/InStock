import React from 'react'
import "./Modal.scss"
import { useState } from 'react'
import closeIcon from "../../assets/Icons/close-24px.svg"

const Modal = () => {

    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <>
            <div>
                <button onClick={toggleModal} className='modalButton'>OPEN</button>
            </div>

            {modal && (
                <div className='modal'>
                    <div className='overlay' onClick={toggleModal} ></div>
                    <div className='modal-content'>

                        <div className='closeButton'>
                            <img onClick={toggleModal} src={closeIcon} alt="close the pop up" />
                        </div>


                        <div>
                            <h2 className='modal-content__title'>Delete Washington warehouse?</h2>
                            <p className='modal-content__prompt'>Please confirm that you'd like to delete Washington from the list of wearhouses. You won't be able to undo this action. </p>
                        </div>

                        <div className='buttons'>
                            <button onClick={toggleModal} className='buttons__cancel'>Cancel</button>
                            <button className='buttons__delete'> Delete</button>
                        </div>


                    </div>
                </div>
            )}


        </>


    )
}

export default Modal