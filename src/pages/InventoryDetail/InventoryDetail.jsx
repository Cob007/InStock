import { Link, useNavigate, useParams } from "react-router-dom";
import "./InventoryDetail.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import ArrowBack from "../../assets/Icons/arrow_back-24px.svg";
import EditIcon from "../../assets/Icons/edit-24pxWhite.svg";

const InventoryDetail = () => {
  const { inventoryId } = useParams();

  const navigate = useNavigate();

  

  const [details, setDetails] = useState({});

  const handleEditClicked = () => {
    navigate(`/inventory/${inventoryId}/edit`);
  }

  const loadInventoryDetailsRemote = async () => {
    try {
      const data = await axios.get(
        `http://localhost:8080/inventories/${inventoryId}`
      );
      console.log(data.data);
      setDetails(data.data);
    } catch (err) {
      console.log(`loadInventoryDetailsRemote error : ${err}`);
    }
  };

  useEffect(() => {
    loadInventoryDetailsRemote();
  }, []);

  return (
    <main className="container">
      <div className="container__header">
        <section className="container__header-div">
          <Link to="/inventory">
            <img
              className="container__back-arrow"
              src={ArrowBack}
              alt="Arrow Back"
            />
          </Link>
          <h3 className="container__header">{details?.item_name}</h3>
        </section>

        <div 
        onClick={handleEditClicked}
        className="container__edit-button">
          <img
            className="container__edit-icon"
            src={EditIcon}
            alt="Edit Icon"
          />
          <p className="container__edit-text">Edit</p>
        </div>
      </div>
      <div className="container__divider" />
      <div className="container__details">
        <section className="container__desp-cont">
          <div>
            <h3 className="container__label">item description:</h3>
            <p className="container__text">{details?.description}</p>
          </div>
          <div>
            <h3 className="container__label">category:</h3>
            <p className="container__text">{details?.category}</p>
          </div>
        </section>
        <div className="container__horizontal-divider" />
        <section className="container__warehouse-cont">
          <div className="container__status-qty">
            <div className="container__status">
              <h3 className="container__label">Status:</h3>
              <p
                className={`container__text ${
                  details?.quantity > 0
                    ? "container__instock"
                    : "container__nostock"
                }`}
              >
                {details?.status}
              </p>
            </div>
            <div className="container__qty">
              <h3 className="container__label">Quantity:</h3>
              <p className="container__text">{details?.quantity}</p>
            </div>
          </div>
          <div>
            <h3 className="container__label">warehouse:</h3>
            <p className="container__text">{details?.warehouse_name}</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default InventoryDetail;
