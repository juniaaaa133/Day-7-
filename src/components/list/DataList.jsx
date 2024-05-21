import React, { useState } from 'react'
import './index.css'
import { FaUserEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const DataList = ({name,location,postal_code,editUser}) => {

  return (
    <div className='list-ctn'>
      <div className="list">
            <div className="list-title main-f">Name</div>
            <div className="list-data main-f">{name}</div>
        </div>
        <div className="list">
            <div className="list-title main-f">Location</div>
            <div className="list-data main-f">{location}</div>
                  </div>
                  <div className="list">
            <div className="list-title main-f">Postal Code</div>
            <div className="list-data main-f">{postal_code}</div>
                  </div>
    </div>
  )
}

export default DataList