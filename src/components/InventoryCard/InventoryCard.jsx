import "./InventoryCard.scss";
import Arrow from "../../assets/Icons/chevron_right-24px.svg";
import DeleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import EditIcon from "../../assets/Icons/edit-24px.svg";
const InventoryCard = (props) => {
  return (
    <div className="card">
      <div className="card__group">
        <section className="card__subgroup">
          <div>
            <h3 className="card__label">Inventory Item</h3>
            <p>
              Television{" "}
              <span>
                <img src={Arrow} />
              </span>
            </p>
          </div>
          <div>
            <h3 className="card__label">category</h3>
            <p>Electronics</p>
          </div>
        </section>
        <section className="card__subgroup">
          <div>
            <h3 className="card__label">Status</h3>
            <p>In stock</p>
          </div>
          <div>
            <h3 className="card__label">Qty</h3>
            <p>500</p>
          </div>
          <div>
            <h3 className="card__label">warehouse</h3>
            <p>Manhattan</p>
          </div>
        </section>
      </div>
      <section className="card__icons">
        <img src={DeleteIcon} alt="Delete Inventory icon" />
        <img src={EditIcon} alt="Edit Inventory icon" />
      </section>
    </div>
  );
};

export default InventoryCard;
