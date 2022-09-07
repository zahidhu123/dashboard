import React from 'react'
import { Button } from '../../component/button/button'

export default function AddOrder() {
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
                <div className='notifaction-btn ms-3'><i className="fa-solid fa-bell text-secondary"></i>
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
                      <h1 className="header-1 ">Add Room Booking</h1>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-4">
                      <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Name' />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Email</label>
                        <input type="email" class="form-control" id="exampleInputPassword1" placeholder='Email' />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Mobile Number</label>
                        <input type="number" class="form-control" id="exampleInputPassword1" placeholder='Mobile Number' />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">City</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder='City' />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Arrive</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Arrive' />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Depart</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder='Depart' />
                      </div>
                    </div>
                    <div className="col-md-4 mb-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label label-resize">
                        Gender
                      </label>
                      <select class="form-select form-control1" id="exampleFormControlInput1">
                        <option selected></option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label label-resize">
                        No of Persons
                      </label>
                      <select class="form-select form-control1" id="exampleFormControlInput1">
                        <option selected>1</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="2">3</option>
                        <option value="2">4</option>
                        <option value="2">5</option>
                        <option value="2">6</option>
                      </select>
                    </div>

                    <div className="col-md-4 mb-4">
                      <label htmlFor="exampleFormControlInput1" className="form-label label-resize">
                        Room Type
                      </label>
                      <select class="form-select form-control1" id="exampleFormControlInput1">
                        <option selected></option>
                        <option value="1">Single</option>
                        <option value="1">Double</option>
                        <option value="1">Queen</option>
                        <option value="2">King</option>
                      </select>
                    </div>
                    <div className="col-lg-12">
                      <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Comment</label>
                        <textarea type="text" class="form-control" rows={5} id="exampleInputPassword1" placeholder='comment' />
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-4">
                      <Button label="Add" class="btn-primary me-2" type="submit" />
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
