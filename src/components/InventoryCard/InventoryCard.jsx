import "./InventoryCard.scss";
import Arrow from "../../assets/Icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
import { useState } from "react";
const InventoryCard = (props) => {
  const [styleStock, setStyleStock] = useState("card__nostock");

  return (
    <div className="card">
      <div className="card__group">
        <section className="card__subgroup">
          <div>
            <h3 className="card__label">Inventory Item</h3>
            <div className="card__name-div">
              <p className="card__name">Television</p>
              <img src={Arrow} />
            </div>
          </div>
          <div className="card__element">
            <h3 className="card__label">category</h3>
            <p className="card__text">Electronics</p>
          </div>
        </section>
        <section className="card__subgroup">
          <div>
            <h3 className="card__label">Status</h3>
            <p className={`card__text ${styleStock}`}>Out of Stock</p>
          </div>
          <div className="card__element">
            <h3 className="card__label">Qty</h3>
            <p className="card__text">500</p>
          </div>
          <div className="card__element">
            <h3 className="card__label">warehouse</h3>
            <p className="card__text">Manhattan</p>
          </div>
        </section>
      </div>
      <section className="card__icons-section">
        <img
          className="card__icon"
          src={DeleteIcon}
          alt="Delete Inventory icon"
        />
        <img className="card__icon" src={EditIcon} alt="Edit Inventory icon" />
      </section>
    </div>
  );
};

export default InventoryCard;
