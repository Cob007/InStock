import './Title.scss'

import arrow from '../../../assets/Icons/arrow_back-24px.svg'
import editIcon from '../../../assets/Icons/edit-24pxWhite.svg'
import sort from '../../../assets/Icons/sort-24px.svg'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const DetailsTitleBar = (warehouseData) => {
if(!warehouseData){
  return <div>Loading....</div>
}
// warehouseData

  return (
    <div className='parentDetail'>
      <div className="detailTitle">
        <div className='detailsArrowAndName'>
      <Link to="/warehouse" className='arrowDetailDiv'>
        <img className="arrow" src={arrow} />
      </Link>
        <p className="detailTitle__title">{warehouseData.warehouse_name}</p>
        </div>
        <div className='notDetailLogo'>
        <Link to="warehouse/new" className="detailTitle__button">
          <img className='editIcon' src={editIcon}/>
          <h1 className='notMobileDetail'>Edit</h1>
          </Link>
        </div>
      </div>
      </div>
  );
};

export default DetailsTitleBar;
