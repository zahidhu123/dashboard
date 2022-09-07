import React from 'react';
import './statisticsCard.css';
import { MdLeaderboard, MdBookmark, MdPeopleAlt, MdCall, MdAttachMoney } from 'react-icons/md';

export default function StatisticsCard() {
  return (
    <div className="card">
      <h3 className="header-3 mb-5">Statistics</h3>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="d-flex align-items-center mb-3">
          <div className="rounded-icon primary me-3">
            <MdLeaderboard size={24} />
          </div>
          <div>
            <p className="order-st m-0">Orders</p>
            <h4 className="header-3 m-0">230</h4>
          </div>
        </div>

        <div className="d-flex align-items-center  mb-3">
          <div className="rounded-icon skyBlue ">
            <MdBookmark size={24} />
          </div>
          <div className='ms-2'>
            <p className="order-st m-0">New Booking</p>
            <h4 className="header-3 m-0">155</h4>
          </div>
        </div>

        <div className="d-flex align-items-center  mb-3">
          <div className="rounded-icon primary me-3">
            <MdCall size={24} />
          </div>
          <div>
            <p className="order-st m-0">Inquiry</p>
            <h4 className="header-3 m-0">52</h4>
          </div>
        </div>

        <div className="d-flex align-items-center  mb-3">
          <div className="rounded-icon skyBlue me-3">
            <MdAttachMoney size={24} />
          </div>
          <div>
            <p className="order-st m-0">Total Earning</p>
            <h4 className="header-3 m-0">13,921$</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
