import "./InventoryCard.scss";
import Arrow from "../../assets/Icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import { useState } from "react";
const InventoryCard = (props) => {


  const { inventory, handleEditInventory, handleDeleteInventory } = props;
  const [styleStock, setStyleStock] = 
  useState(inventory?.quantity>0?"card__instock":"card__nostock");


  

  return (
    <div className="card">
      <div className="card__group">
        <section className="card__subgroup-one ">
          <div className="card__element-inven">
            <h3 className="card__label">Inventory Item</h3>
            <div className="card__name-div">
              <p className="card__name">{inventory?.item_name}</p>
              <img src={Arrow} />
            </div>
          </div>
          <div className="card__element">
            <h3 className="card__label">category</h3>
            <p className="card__text">{inventory?.category}</p>
          </div>
        </section>
        <section className="card__subgroup">
          <div className="card__element-status">
            <h3 className="card__label">Status</h3>
            <p className={`card__text ${styleStock}`}>{inventory?.status}</p>
          </div>
          <div className="card__element-qty">
            <h3 className="card__label">Qty</h3>
            <p className="card__text">{inventory?.quantity}</p>
          </div>
          <div className="card__element-warehouses">
            <h3 className="card__label">warehouse</h3>
            <p className="card__text--tablet">{inventory?.warehouse_name}</p>
          </div>
        </section>
      </div>
      <section className="card__icons-section">
        <img
            onClick={()=>handleDeleteInventory(inventory?.id)}
          className="card__icon"
          src={DeleteIcon}
          alt="Delete Inventory icon"
        />
        <img
            onClick={()=>handleEditInventory(inventory?.id)}
         className="card__icon"
         src={EditIcon} alt="Edit Inventory icon" />
      </section>
    </div>
  );
};

export default InventoryCard;
