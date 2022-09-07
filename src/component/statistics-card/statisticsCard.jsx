import React from 'react';
import './statisticsCard.css';
import { MdPersonOutline, MdOutlineWarningAmber, MdPeopleAlt } from 'react-icons/md';

export default function StatisticsCard() {
  return (
    <div className="card">
      <h3 className="header-3 mb-5">Statistics</h3>
      <div className="d-flex justify-content-between flex-wrap">
        <div className="d-flex align-items-center mb-3">
          <div className="rounded-icon primary me-3">
            <MdPersonOutline size={24} />
          </div>
          <div>
            <h4 className="header-3 m-0">230</h4>
            <p className="label m-0">Active Member</p>
          </div>
        </div>

        <div className="d-flex align-items-center  mb-3">
          <div className="rounded-icon skyBlue me-3">
            <MdPersonOutline size={24} />
          </div>
          <div>
            <h4 className="header-3 m-0">80</h4>
            <p className="label m-0">Visitor this Week</p>
          </div>
        </div>

        <div className="d-flex align-items-center  mb-3">
          <div className="rounded-icon red me-3">
            <MdOutlineWarningAmber size={24} />
          </div>
          <div>
            <h4 className="header-3 m-0">14</h4>
            <p className="label m-0">Plan Expire Today</p>
          </div>
        </div>

        {/* <div className="d-flex align-items-center">
          <div className="rounded-icon green me-3">
            <MdPeopleAlt size={24} />
          </div>
          <div>
            <h4 className="header-3 m-0">9</h4>
            <p className="label m-0">Staff Present Today</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
