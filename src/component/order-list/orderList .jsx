import React from "react";
import "./orderList.css";
import { LinkButton } from "../button/button";
import Avatar1 from "../../assets/metri.jpg";
import { MdClose } from 'react-icons/md'

OrderList.defaultProps = {
  showHeader: true,
};

export default function OrderList(props) {
  const expiredMember = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  function onClick() {
    props.handleBtnClick && props.handleBtnClick();
  }

  return (
    <div className="table-wrapper">
      {props.showHeader && (
        <div className="table-title-wrapper d-flex justify-content-between">
          <h4 className="header-3 mb-0">Order Summary</h4>
          <LinkButton label="View All" class="text-primary subHeading" />
        </div>
      )}
      <div className="custom-table">
        <div className="table-header">
          <p className="label fw-bold w-25 mb-0">NAME</p>

          <p className="label fw-bold flex-grow-1 mb-0 text-center">MOBILE</p>

          <p className="label fw-bold flex-grow-1 mb-0 text-center">AMOUNT</p>

          <p className="label fw-bold flex-grow-1 mb-0 text-center">ACTIONS</p>
        </div>
        {expiredMember.map(() => {
          return (
            <div className="table-data-row">
              <div className="w-25 d-flex align-items-center">
                <div className="me-3">
                  <img src={Avatar1} className="small-avatar" />
                </div>
                <div>
                  <p className="label fw-bold  mb-0 text-primary">
                    Edgar Jones
                  </p>
                  <p className="label mb-0">@tahseen</p>
                </div>
              </div>

              <p className="label flex-grow-1 mb-0 text-center">8989898989</p>

              <p className="label flex-grow-1 mb-0 text-center">$4300</p>

              <p className="label flex-grow-1 mb-0 text-center">
                <LinkButton
                  label="View Profile"
                  class="text-primary label"
                  handleBtnClick={onClick}
                />
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}