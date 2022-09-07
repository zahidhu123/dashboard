import React from 'react'
import './messages.css'
import Doctore from '../../assets/doctor.png'
import Patient from '../../assets/patient.jpg'
import Michael from '../../assets/michael-dam.jpg'
import Metri from '../../assets/metri.jpg'
import Oleg from '../../assets/oleg.jpg'
import Albert from '../../assets/albert.jpg'
import Charli from '../../assets/charli.jpg'
import Teeth1 from '../../assets/teeth1.jpg'
import Teeth2 from '../../assets/teeth2.jpg'
import { MdSend } from 'react-icons/md'

export default function Messages() {
  return (
    <>
      <div className='m-box'>
        <div className='patient-nav1'>
          <div className='d-flex justify-content-between align-items-center h-100'>
            <div>
              <p className='m-0 fs-22 fw-500 ps-4'><i class="fa-regular fa-comment-dots px-2 fs-24 profile-icon"></i>Message</p>
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
        <div className="row">
          <div className="col-lg-3">
            <div className='active-wrapper'>
              <div className='position-relative d-flex align-items-center search-inp-box'>
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input type="text" placeholder='search' className='rounded-pill search-input w-100' />
              </div>
              <div className='row align-items-center pt-3 search-inp-box'>
                <div className="col-10 p-0">
                  <div className='d-flex'>
                    <img src={Albert} alt="" className='small-img' />
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
              <div className='row align-items-center pt-3 search-inp-box'>
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
              <div className='row align-items-center pt-3 search-inp-box'>
                <div className="col-10 p-0">
                  <div className='d-flex'>
                    <img src={Metri} alt="" className='small-img' />
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
              <div className='row align-items-center pt-3 search-inp-box'>
                <div className="col-10 p-0">
                  <div className='d-flex'>
                    <img src={Michael} alt="" className='small-img' />
                    <div className='ps-2'>
                      <p className='title-name m-0'>Diane Cooper</p>
                      <p className='title-subheading1 m-0'>Lorem ipsum dolor sit ame...</p>
                    </div>
                  </div>
                </div>
                <div className="col-2 p-0">
                  <div className='d-flex flex-column'>
                    <span className='real-time'>12.00 pm</span>
                  </div>
                </div>
              </div>
              <div className='row align-items-center pt-3 search-inp-box'>
                <div className="col-10 p-0">
                  <div className='d-flex'>
                    <img src={Oleg} alt="" className='small-img' />
                    <div className='ps-2'>
                      <p className='title-name m-0'>Diane Cooper</p>
                      <p className='title-subheading1 m-0'>Lorem ipsum dolor sit ame...</p>
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
            <div className="row gx-0">
              <div className="col-lg-8">
                <div className='message-area active-wrapper1'>

                  <div className='message-content'>
                    {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((data) => {
                      return <>
                        <div className='receiver-area'>
                          <div className=''>
                            <img src={Patient} alt="" className='receiver-photo' />
                          </div>
                          <p className='receiver-content'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt, alias itaque accusamus et laborum voluptatibus ut tempora exercitationem earum nesciunt?</p>
                          <div className='receiver-time'>
                            <p className=''>10.20 pm</p>
                          </div>
                        </div>

                        <div className='sender-area'>
                          <div className='sender-time'>
                            <p>10.40 pm</p>
                          </div>
                          <div className='sender-content'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                          </div>
                        </div>
                      </>
                    })}

                  </div>
                  <div className='message-footer'>
                    <div className='d-flex'>
                      <div className='d-flex w-75 align-items-center'>
                        <i class="fa-regular fa-face-smile smile"></i>
                        <input type="text" className='search-message m-0 w-100' placeholder='Type a Message...' />
                      </div>
                      <div className='d-flex justify-content-end w-25'>
                        <i class="fa-solid fa-paperclip smile"></i>
                        <MdSend className="send-buton ms-2 " />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className='active-wrapper1'>
                  <div className='position-relative'>
                    <div className='profile-img-wrapper-1'>
                      <img src={Charli} className="profile-img" alt="" />
                    </div>
                    <div className='fisher-wrapper p-4'>
                      <p className='profile-name fw-bold m-0'>Aubrey Fisher</p>
                      <p className='profile-time m-0'>Last seen today at 13.42</p>
                    </div>
                  </div>
                  <div className='p-3'>
                    <p className='contact-info'>Contact Info</p>
                    <div className=''>
                      <p className='email-title'>Email Address</p>
                      <p className='email-address'>aubdrey.ahoy@gmail.com</p>
                    </div>
                    <div>
                      <p className='email-title'>Phone Number</p>
                      <p className='email-address'>(91)8882094848</p>
                    </div>
                    <div>
                      <p className='email-title'>Street Address</p>
                      <p className='email-address'>JI. Diponegoro No. 21</p>
                    </div>
                    <div>
                      <p className='email-title'>City</p>
                      <p className='email-address m-0'>Cilacap</p>
                    </div>
                  </div>
                  <div className='attachment-wrapper'>
                    <div className='p-3'>
                      <p className='contact-info'>Attachment</p>
                      <div>
                        <img src={Teeth1} className="teeth me-2" alt="" />
                        <img src={Teeth2} className="teeth" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
