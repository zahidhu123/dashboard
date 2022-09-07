import React from 'react'
import { Button } from '../../component/button/button'

export default function PaymentInformation() {
  return (
    <>
      <div className='m-box'>
        <div className='patient-nav1'>
          <div className='d-flex justify-content-between align-items-center h-100'>
            <div>
              <p className='m-0 fs-22 fw-500 ps-4'>Add Payment</p>
            </div>
            <div>
              <div className='d-flex align-items-center'>
                <div className='position-relative d-flex align-items-center'>
                  <i className="fa-solid fa-magnifying-glass search-icon"></i>
                  <input type="text" placeholder='search' className='rounded-pill search-input' />
                </div>
                <div className='add-btn'><i className="fa-regular fa-plus text-light fs-26 fw-700 "></i></div>
                <div className='notifaction-btn'><i className="fa-solid fa-bell text-secondary"></i>
                  <div className='red-dot'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className='card '>
                <form action="">
                  <div className="row">
                    <div className="col-md-4">
                      <h1 className="header-1 ">Personal Info</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter Number' />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mobile</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder='Enter Mobile Number' />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder='Enter Email Address' />
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label label-resize">
                        Batch
                      </label>
                      <select class="form-select form-control1" id="exampleFormControlInput1">
                        <option selected>Staff</option>
                        <option value="1">Staff</option>
                        <option value="2">Staff</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label label-resize">
                        Membership
                      </label>
                      <select class="form-select form-control1" id="exampleFormControlInput1">
                        <option selected>eleanoraguilar@gmail.com</option>
                        <option value="1">eleanoraguilar@gmail.com</option>
                        <option value="2">eleanoraguilar@gmail.com</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label label-resize">
                        Plan
                      </label>
                      <select class="form-select form-control1" id="exampleFormControlInput1">
                        <option selected>WinDon Technologies Pvt</option>
                        <option value="1">WinDon Technologies Pvt</option>
                        <option value="2">WinDon Technologies Pvt</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label label-resize">
                        Trainer
                      </label>
                      <select class="form-select form-control1" id="exampleFormControlInput1">
                        <option selected>Staff</option>
                        <option value="1">Staff</option>
                        <option value="2">Staff</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label label-resize">
                        Discount %
                      </label>
                      <select class="form-select form-control1" id="exampleFormControlInput1">
                        <option selected>eleanoraguilar@gmail.com</option>
                        <option value="1">eleanoraguilar@gmail.com</option>
                        <option value="2">eleanoraguilar@gmail.com</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label label-resize">
                        State
                      </label>
                      <select class="form-select form-control1" id="exampleFormControlInput1">
                        <option selected>WinDon Technologies Pvt</option>
                        <option value="1">WinDon Technologies Pvt</option>
                        <option value="2">WinDon Technologies Pvt</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label label-resize">
                        City
                      </label>
                      <select class="form-select form-control1" id="exampleFormControlInput1">
                        <option selected>WinDon Technologies Pvt</option>
                        <option value="1">WinDon Technologies Pvt</option>
                        <option value="2">WinDon Technologies Pvt</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label label-resize">
                        Country
                      </label>
                      <select class="form-select form-control1" id="exampleFormControlInput1">
                        <option selected>WinDon Technologies Pvt</option>
                        <option value="1">WinDon Technologies Pvt</option>
                        <option value="2">WinDon Technologies Pvt</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-4">
                      <Button label="Add" class="btn-primary me-2 w-100" type="submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
