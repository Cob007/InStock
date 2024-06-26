import { useState } from 'react'
import chevronRight from '../../../assets/Icons/chevron_right-24px.svg'
import editIcon from '../../../assets/Icons/edit-24px.svg'
import deleteIcon from '../../../assets/Icons/delete_outline-24px.svg'
import './individualWarehouseComponent.scss'
import axios from 'axios'
import sort from '../../../assets/Icons/sort-24px.svg'
import Modal from '../../modal/Modal'
import { Link } from "react-router-dom";


const SearchbarComponent = ({ handleWarehouseInventory, warehouse, address, contactName, email, phoneNumber, warehouseID, setWarehouseData }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleWarehouseDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/warehouses/${warehouseID}`);
      const response = await axios.get('http://localhost:8080/warehouses');
      const updatedData = response.data;
      setWarehouseData(updatedData);
      toggleModal();
    } catch (error) {
      console.error("Error deleting warehouse:", error);
    }
  };



  return (
    <div className='parent'>
      <div className='warehouseList' >
        <div className='warehouseList__individual'>
          <div className='category warehouse'>
            <p className='individual__title'>WAREHOUSE</p>
            <div className="warehouseWchevron">
              <div
                onClick={() => {
                  handleWarehouseInventory(warehouseID)
                }}
                className='individual__content'>
                {warehouse}
                <img className='chevronRight' src={chevronRight} />
              </div>
            </div>
          </div>
          <div className='category contactName'>
            <p className='individual__title'>CONTACT NAME</p>
            <p className='individual__content notMobile address'>{address}</p>
            <p className='individual__content mobile'>{contactName}</p>
          </div>
          <div className='category address'>
            <p className='individual__title'>ADDRESS</p>
            <p className='individual__content notMobile'>{contactName}</p>
            <p className='individual__content mobile'>{address}</p>
          </div>
          <div className='category info'>
            <p className='individual__title'>CONTACT INFORMATION</p>
            <div className="contactInformation">
              <p className='individual__content'>{phoneNumber}</p>
              <p className='individual__content'>{email}</p>
            </div>
          </div>
          <div className="category actions">
            <Link onClick={toggleModal} className='delete'>
              <img src={deleteIcon} alt='delete' />
            </Link>
            <Link to={`${warehouseID}/edit`} className='edit'><img src={editIcon} /></Link>
          </div>

        </div>

        <div>
          <Modal isOpen={isModalOpen} toggleModal={toggleModal} warehouseName={warehouse} warehouseId={warehouseID} setWarehouseData={setWarehouseData} handleDelete={handleWarehouseDelete} />
        </div>

      </div>
    </div>
  );
};

export default SearchbarComponent;
