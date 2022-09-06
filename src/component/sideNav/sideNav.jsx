import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./sideNav.css"
import logo from '../../assets/logo.jpeg'
import { doctorDetailsApi } from '../../service/apiService'
import doctorImg from '../../assets/doctor.png'

export default function SideNav() {
  const [doctorDetail, setdoctorDetail] = useState('')

  useEffect(() => {
   
    getDoctorDetail();

}, [])


function getDoctorDetail() {
  doctorDetailsApi().then((result) => {
      console.log(result.data[0]);
      setdoctorDetail(result.data[0])
  });
}

  return (
   <>
     <div className='sideNav-wrapper'>
       <div>
         <div className='d-flex justify-content-between  align-items-center px-2 pt-2 mb-3'>
       <div className='d-flex align-items-center '>
         <div>
           <img src={logo} alt="" className='logo-img' />
         </div>
          <div>
              <p className=' m-0 fw-bold fs-22 lh-23'>Zendenta</p>
              <p className='m-0 fs-11 text-secondary '>cabut gigi tanpa sakit</p>
          </div>
          
       </div>
         <div>
              <i className="fa-solid fa-bars text-secondary fs-18"></i>
          </div>
          </div>
       <div>
          <div className=''>
             <NavLink to="/overview"  className={({ isActive }) => (isActive ? 'active-tab' : 'inactive-tab')}><i className="fa-regular fa-circle-question px-2 pe-2"></i>Overview</NavLink>
          </div>
          <div className=''>
             <NavLink to="/calender"  className={({ isActive }) => (isActive ? 'active-tab' : 'inactive-tab')}><i className="fa-solid fa-calendar px-2 pe-2"></i>Calender</NavLink>
          </div>
          <div className=' w-100'>
             <NavLink to="/patientList/upcomingAppoinments"  className={({ isActive }) => (isActive ? 'active-tab' : 'inactive-tab')} ><i className="fa-regular fa-user px-2 "></i>Patient List</NavLink>
          </div>
          <div className=''>
              <NavLink to="/messages"  className={({ isActive }) => (isActive ? 'active-tab' : 'inactive-tab')}><i className="fa-regular fa-comment-dots px-2 pe-2"></i>Messages</NavLink>
          </div>
          <div className=''>
             <NavLink to="/paymentInformation"  className={({ isActive }) => (isActive ? 'active-tab' : 'inactive-tab')}><i className="fa-solid fa-sack-dollar px-2 pe-2"></i>Payment information</NavLink>
          </div>
          <div className=''>
           <NavLink to="/setting"  className={({ isActive }) => (isActive ? 'active-tab' : 'inactive-tab')}><i className="fa-solid fa-sliders px-2 pe-2"></i>Setting</NavLink>
          </div>

       </div>
       </div>
       <div>
         <p className=' text-secondary fs-14 fw-500 ps-4'> <i className="fa-solid fa-circle-info pe-2"></i>Help ?</p>
         <div className='doctor-detail-wrapper'>
                <div className='d-flex '>
                    <div className='doctor-img-wrapper'>
                     <img src={doctorImg} alt=""  className='doctor-img'/>
                    </div>
                    <div>
                         <p className='m-0 fs-13 fw-700'>{doctorDetail.name}</p>
                         <p className="m-0 fs-10 text-secondary">{doctorDetail.specification}</p>
                    </div>
                   
                </div>
                <div className=''>
                       <i className="fa-solid fa-angle-down text-secondary"></i>
                    </div>
         </div>
       </div>
     </div>
   </>
  )
}
