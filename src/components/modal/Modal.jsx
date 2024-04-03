import React from 'react'
import "./Modal.scss"
import { useState } from 'react'
import axios from 'axios'
import closeIcon from "../../assets/Icons/close-24px.svg"

const Modal = ({ isOpen, toggleModal, warehouseName, warehouseId, inventoryName, handleDelete }) => {


    return (
        <>
            {isOpen && (
                <div className='modal'>
                    <div className='overlay' onClick={toggleModal} ></div>
                    <div className='modal-content'>

                        <div className='closeButton'>
                            <img onClick={toggleModal} src={closeIcon} alt="close the pop up" />
                        </div>

                        {warehouseId ? (
                            <div>
                                <h2 className='modal-content__title'>Delete {warehouseName} warehouse?</h2>
                                <p className='modal-content__prompt'>Please confirm that you'd like to delete {warehouseName} from the list of wearhouses. You won't be able to undo this action.</p>
                            </div>
                        ) : (
                            <div>
                                <h2 className='modal-content__title'>Delete {inventoryName} inventory Item?</h2>
                                <p className='modal-content__prompt'>Please confirm that you'd like to delete {inventoryName} from the inventory list. You won't be able to undo this action.</p>
                            </div>
                        )}


                        <div className='buttons'>
                            <button onClick={toggleModal} className='buttons__cancel'>Cancel</button>
                            <button onClick={handleDelete} className='buttons__delete'> Delete</button>
                        </div>


                    </div>
                </div>
            )}


        </>


    )
}

export default Modal
