import "./WarehouseDetails.scss";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const WarehouseDetails = (props) => {
  const { warehouseData } = props;
  const {
    address,
    city,
    contact_name,
    contact_email,
    contact_phone,
    contact_position,
  } = warehouseData;

  if (!props) {
    return <div>Loading....</div>;
  }
  
  return (
    <div className="parent">
      <section className="warehouseDetail">
        <div className="top">
          <p className="subTitle detailBorder">WAREHOUSE ADDRESS:</p>
          <p className="detailBorder">{address + ", " + city}</p>
        </div>
        <div className="bottom">
          <div className="left">
            <p className="subTitle">CONTACT NAME:</p>
            <p>{contact_name}</p>
            <p>{contact_position}</p>
          </div>
          <div className="right">
            <p className="subTitle">CONTACT INFORMATION:</p>
            <p>{contact_phone}</p>
            <p>{contact_email}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarehouseDetails;
