import React from 'react'
import './messages.css'
import Doctore from '../../assets/doctor.png'
import Patient from '../../assets/patient.jpg'
import Michael from '../../assets/michael-dam.jpg'
import Metri from '../../assets/metri.jpg'

export default function Messages() {
  return (
    <>
      <div className='m-box'>
        <div className="row justify-content-between py-3">
          <div className="col-lg-6">
            <h3 className=''>Message Page</h3>
          </div>
          <div className="col-lg-6">
            <p className='text-end'>Profile</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className='active-wrapper'>
              <div className='position-relative d-flex align-items-center search-inp-box'>
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" placeholder='search' className='rounded-pill search-input w-100' />
              </div>
              <div className='row align-items-center py-3'>
                <div className="col-10 p-0">
                  <div className='d-flex'>
                    <img src={Doctore} alt="" className='small-img' />
                    <div className='ps-2'>
                      <p className='title-name fw-bold m-0'>Diane Cooper</p>
                      <p className='title-subheading m-0'>Lorem ipsum dolor sit ame...</p>
                    </div>
                  </div>
                </div>
                <div className="col-2 p-0">
                  <div className='d-flex flex-column'>
                    <span className='real-time'>12.00 pm</span>
                    <div className='d-flex justify-content-end'>
                      <span className='num-style'>2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row align-items-center py-3'>
                <div className="col-10 p-0">
                  <div className='d-flex'>
                    <img src={Patient} alt="" className='small-img' />
                    <div className='ps-2'>
                      <p className='title-name fw-bold m-0'>Diane Cooper</p>
                      <p className='title-subheading m-0'>Lorem ipsum dolor sit ame...</p>
                    </div>
                  </div>
                </div>
                <div className="col-2 p-0">
                  <div className='d-flex flex-column'>
                    <span className='real-time'>12.00 pm</span>
                    <div className='d-flex justify-content-end'>
                      <span className='num-style'>1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row align-items-center py-3'>
                <div className="col-10 p-0">
                  <div className='d-flex'>
                    <img src={Doctore} alt="" className='small-img' />
                    <div className='ps-2'>
                      <p className='title-name fw-bold m-0'>Diane Cooper</p>
                      <p className='title-subheading m-0'>Lorem ipsum dolor sit ame...</p>
                    </div>
                  </div>
                </div>
                <div className="col-2 p-0">
                  <div className='d-flex flex-column'>
                    <span className='real-time'>12.00 pm</span>
                    <div className='d-flex justify-content-end'>
                      <span className='num-style'>1</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row align-items-center py-3'>
                <div className="col-10 p-0">
                  <div className='d-flex'>
                    <img src={Doctore} alt="" className='small-img' />
                    <div className='ps-2'>
                      <p className='title-name fw-bold m-0'>Diane Cooper</p>
                      <p className='title-subheading m-0'>Lorem ipsum dolor sit ame...</p>
                    </div>
                  </div>
                </div>
                <div className="col-2 p-0">
                  <div className='d-flex flex-column'>
                    <span className='real-time'>12.00 pm</span>
                  </div>
                </div>
              </div>
              <div className='row align-items-center py-3'>
                <div className="col-10 p-0">
                  <div className='d-flex'>
                    <img src={Doctore} alt="" className='small-img' />
                    <div className='ps-2'>
                      <p className='title-name fw-bold m-0'>Diane Cooper</p>
                      <p className='title-subheading m-0'>Lorem ipsum dolor sit ame...</p>
                    </div>
                  </div>
                </div>
                <div className="col-2 p-0">
                  <div className='d-flex flex-column'>
                    <span className='real-time'>12.00 pm</span>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          <div className="col-lg-9">

          </div>
        </div>
      </div>
    </>
  )
}
