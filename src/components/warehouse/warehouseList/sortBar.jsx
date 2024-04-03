import './individualWarehouseComponent.scss'
import sort from '../../../assets/Icons/sort-24px.svg'
import { Link } from "react-router-dom";
const sortBarComponent = ({warehouse,address,contactName, email, phoneNumber,warehouseID}) => {


    return (
        <div className='warehouseList__label'>
            <div className='categories'>
                <p className='labelTitle'>WAREHOUSE</p>
                <Link href="#"><img className='sort' src={sort}/></Link>
            </div>
            <div className='categories'>
                <p className='labelTitle '>ADDRESS</p>
                <Link href="warehouse#sort"><img className='sort' src={sort}/></Link>
            </div>
            <div className='categories'>
                <p className='labelTitle'>CONTACT NAME</p>
                <Link href="#"><img className='sort' src={sort}/></Link>
            </div>
            <div className='categories'>
                <p className='labelTitle'>CONTACT INFORMATION</p>
            <Link href="#"><img className='sort' src={sort}/></Link>
            </div>
            <div className='categories'>
                <p className='labelTitle actions'>ACTIONS</p>
            </div>
        </div>
);
};
export default sortBarComponent