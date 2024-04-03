import chevronRight from '../../../assets/Icons/chevron_right-24px.svg'
import editIcon from '../../../assets/Icons/edit-24px.svg'
import deleteIcon from '../../../assets/Icons/delete_outline-24px.svg'
import './individualWarehouseComponent.scss'


const SearchbarComponent = ({ handleWarehouseInventory, warehouse,address,contactName, email, phoneNumber,warehouseID}) => {

  return (
    <div className='parent'>
    <div className='warehouseList' >
      <div className='warehouseList__individual'>
        <div className='category warehouse'>
          <p className='individual__title'>WAREHOUSE</p>
          <div className="warehouseWchevron">
            <div 
              onClick={()=>{
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
          <a href="warehouse/delete" className='delete'><img src={deleteIcon}/></a>
          <a href={`warehouse/${warehouseID}/edit`} className='edit'><img src={editIcon}/></a>
        </div>
      </div>

    </div>
    </div>
  );
};

export default SearchbarComponent;
