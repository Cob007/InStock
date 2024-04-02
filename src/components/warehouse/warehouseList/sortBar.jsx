import './individualWarehouseComponent.scss'
import sort from '../../../assets/Icons/sort-24px.svg'

const sortBarComponent = ({warehouse,address,contactName, email, phoneNumber,warehouseID}) => {


    return (
        <div className='warehouseList__label'>
            <div className='categories'>
                <p className='labelTitle'>WAREHOUSE</p>
                <a href="#"><img className='sort' src={sort}/></a>
            </div>
            <div className='categories'>
                <p className='labelTitle '>ADDRESS</p>
                <a href="warehouse#sort"><img className='sort' src={sort}/></a>
            </div>
            <div className='categories'>
                <p className='labelTitle'>CONTACT NAME</p>
                <a href="#"><img className='sort' src={sort}/></a>
            </div>
            <div className='categories'>
                <p className='labelTitle'>CONTACT INFORMATION</p>
            <a href="#"><img className='sort' src={sort}/></a>
            </div>
            <div className='categories'>
                <p className='labelTitle actions'>ACTIONS</p>
            </div>
        </div>
);
};
export default sortBarComponent