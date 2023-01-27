import React from 'react';
import logo from "../../assests/logo.png";
import "./Ware.css"

const Warehouse = () => {
  return (
    <>
      <div className="side-bar">
        <div className='logoh2'>
            <img src={logo} alt="" />
            <h2>Shipper
            Solution</h2>
        </div>
            <div className="ulll">
                <ul>
                    <li>Warehouses</li>
                    <li>Shipments</li>
                    <li>Oders</li>
                    <li>Make an Order</li>
                </ul>
            </div>
          </div>
    </>
  )
}

export default Warehouse
