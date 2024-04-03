import './wareHouseListPage.scss'
import TitleBar from "../../components/warehouse/warehouseList/titleBarComponent"
import IndividualWarehouse from "../../components/warehouse/warehouseList/individualWarehouseComponent"
import SortBar from "../../components/warehouse/warehouseList/sortBar"
import axios from 'axios'
import { useEffect, useState } from 'react'

const WarehousePage = () => {
  const [warehouseData, setWarehouseData] = useState([]);

  const fetchWarehouseData = async () => {
    const response = await axios.get('http://localhost:8080/warehouses')
    setWarehouseData(response.data)
  }
  useEffect(() => {
    fetchWarehouseData()
  }, [])
  return (
    <main>
      <TitleBar />
      <SortBar />
      {warehouseData.map((warehouse => (
        <IndividualWarehouse
          key={warehouse.id}
          warehouse={warehouse.warehouse_name}
          address={warehouse.address}
          contactName={warehouse.contact_name}
          phoneNumber={warehouse.contact_phone}
          email={warehouse.contact_email}
          warehouseID={warehouse.id}
          setWarehouseData={setWarehouseData}
        />
      )))

      }
    </main>
  );
};
export default WarehousePage;
