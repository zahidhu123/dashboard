import React from 'react'
import "./orders.css"
import FilterCard from '../../component/filter-card/filterCard'
import OrderList from '../../component/order-list/orderList '

export default function Orders() {
    return (
        <>
            <div className='patientList-wrapper'>
                <div className='patient-nav1'>
                    <div className='d-flex justify-content-between align-items-center h-100'>
                        <div>
                            <p className='m-0 fs-22 fw-500 ps-4'><i className="fa-regular fa-user px-2 fs-24 profile-icon"></i>Booking List</p>
                        </div>
                        <div>
                            <div className='d-flex align-items-center'>
                                <div className='position-relative d-flex align-items-center'>
                                    <i className="fa-solid fa-magnifying-glass search-icon"></i>
                                    <input type="text" placeholder='search' className='rounded-pill search-input' />
                                </div>
                               
                                <div className='notifaction-btn ms-3'><i className="fa-solid fa-bell text-secondary"></i>
                                    <div className='red-dot'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-4 my-3'>
                    <div className="row">
                        <div className="col-lg-9">
                          <OrderList showHeader={false}/>  
                        </div>
                        <div className="col-lg-3">
                            <FilterCard/>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
