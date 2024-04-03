import "./WarehouseInventoryCard.scss";
import Arrow from "../../assets/Icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import { useState } from "react";
const WarehouseInventoryCard = (props) => {


  const { inventory } = props;
  const [styleStock, setStyleStock] = 
  useState(inventory?.quantity>0?"wcard__instock":"wcard__nostock");


  

  return (
    <div className="wcard">
      <div className="wcard__group">
        <section className="wcard__subgroup-one ">
          <div className="wcard__element-inven">
            <h3 className="wcard__label">Inventory Item</h3>
            <div className="wcard__name-div">
              <p className="wcard__name">{inventory?.item_name}</p>
              <img src={Arrow} />
            </div>
          </div>
          <div className="wcard__element-category">
            <h3 className="wcard__label">category</h3>
            <p className="wcard__text">{inventory?.category}</p>
          </div>
        </section>
        <section className="wcard__subgroup">
          <div className="wcard__element-status">
            <h3 className="wcard__label">Status</h3>
            <p className={`wcard__text ${styleStock}`}>{inventory?.status}</p>
          </div>
          <div className="wcard__element-qty">
            <h3 className="wcard__label">Qty</h3>
            <p className="wcard__text">{inventory?.quantity}</p>
          </div>
        </section>
      </div>
      <section className="wcard__icons-section">
        <img
          className="wcard__icon"
          src={DeleteIcon}
          alt="Delete Inventory icon"
        />
        <img className="wcard__icon" src={EditIcon} alt="Edit Inventory icon" />
      </section>
    </div>
  );
};

export default WarehouseInventoryCard;
