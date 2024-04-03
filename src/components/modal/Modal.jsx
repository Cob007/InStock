import React from 'react'
import "./Modal.scss"
import { useState } from 'react'
import axios from 'axios'
import closeIcon from "../../assets/Icons/close-24px.svg"

const Modal = ({ isOpen, toggleModal, warehouseName, warehouseId, setWarehouseData }) => {

    // console.log(warehouseName)
    // console.log(warehouseId)


    const handleWarehouseDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/warehouses/${warehouseId}`);
            const response = await axios.get('http://localhost:8080/warehouses');
            const updatedData = response.data;
            setWarehouseData(updatedData);
            toggleModal();
        } catch (error) {
            console.error("Error deleting warehouse:", error);
        }
    };

    return (
        <>
            {isOpen && (
                <div className='modal'>
                    <div className='overlay' onClick={toggleModal} ></div>
                    <div className='modal-content'>

                        <div className='closeButton'>
                            <img onClick={toggleModal} src={closeIcon} alt="close the pop up" />
                        </div>


                        <div>
                            <h2 className='modal-content__title'>Delete {warehouseName} warehouse?</h2>
                            <p className='modal-content__prompt'>Please confirm that you'd like to delete {warehouseName} from the list of wearhouses. You won't be able to undo this action. </p>
                        </div>

                        <div className='buttons'>
                            <button onClick={toggleModal} className='buttons__cancel'>Cancel</button>
                            <button onClick={handleWarehouseDelete} className='buttons__delete'> Delete</button>
                        </div>


                    </div>
                </div>
            )}


        </>


    )
}

export default Modal
