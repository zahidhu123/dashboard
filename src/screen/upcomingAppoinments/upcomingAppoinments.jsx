import React, { useEffect, useState } from 'react'
import { appointmentDetailApi } from '../../service/apiService';
import "./upcomingAppoinments.css"

export default function UpcomingAppoinments() {
   const [appointmentDetail, setappointmentDetail] = useState([])

useEffect(() => {
    getAppointmentDetail();
}, [])

function getAppointmentDetail() {
    appointmentDetailApi().then((result) => {
        console.log(result.data);
        setappointmentDetail(result.data)
    });
}

    return (
        <>
            <div className=' root-treatment-wrapper'>
                <div>
                    <p className='m-0 fs-12 fw-500'>Root Canal Treatment</p>
                </div>
                <div>
                    <div className='show-previous-btn' role="button">
                        <p className='m-0 fs-10 fw-500'><i className="fa-solid fa-angle-up pe-2"></i>Show Previous Treatment</p>
                    </div>
                </div>
            </div>
{
  appointmentDetail.map((data, index)=>{
      return(
        <div className='d-flex' key={index}>
        <div className='side-line position-relative'>
            <div className="dot"></div>
        </div>
        <div className='appointments-detail '>
            <div>
                <p className='m-0 fs-18 fw-500'>26 Nov '19</p>
                <p className='m-0 fs-10 text-secondary'>09.00-10.00</p>
            </div>
            <div className='line'></div>
            <div>
                <p className='m-0 fs-10 text-secondary'>Treatment</p>
                <p className='m-0 fs-16 fw-500'>Open Access</p>
            </div>
            <div className='line'></div>
            <div>
                <p className='m-0 fs-10 text-secondary'>Dentist</p>
                <p className='m-0 fs-13 fw-500'>Drg.Adam H,</p>
            </div>
            <div>
                <p className='m-0 fs-10 text-secondary'>Nurse</p>
                <p className='m-0 fs-13 fw-500'>Jessicamila</p>
            </div>
            <div>
                <p className='fs-14 m-0 fw-500 text-primary'><i className="fa-regular fa-file-lines"></i> Note</p>
            </div>
        </div>
    </div>
      );

  })

}
           

           



        </>
    )
}
