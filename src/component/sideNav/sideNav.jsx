import React from 'react'
import { NavLink } from 'react-router-dom'
import "./sideNav.css"
import { MdAirplaneTicket } from 'react-icons/md'

export default function SideNav() {


  return (
   <>
     <div className='sideNav-wrapper'>
       <div>
         <div className='d-flex justify-content-between  align-items-center px-2 pt-2 mb-3'>
       <div className='d-flex align-items-center '>
         <div>
           <MdAirplaneTicket className='logo-img' />
         </div>
          <div>
              <p className=' m-0 fw-bold fs-22 lh-23'>Daily Booking</p>
              <p className='m-0 fs-11 text-secondary '>Test</p>
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
        
          <div className=' w-100'>
             <NavLink to="/order-list"  className={({ isActive }) => (isActive ? 'active-tab' : 'inactive-tab')} ><i className="fa-regular fa-user px-2 "></i>View Booking List</NavLink>
          </div>
          <div className=''>
              <NavLink to="/messages"  className={({ isActive }) => (isActive ? 'active-tab' : 'inactive-tab')}><i className="fa-regular fa-comment-dots px-2 pe-2"></i>Chat Support</NavLink>
          </div>
          <div className=''>
             <NavLink to="/add-order"  className={({ isActive }) => (isActive ? 'active-tab' : 'inactive-tab')}><i className="fa-solid fa-sack-dollar px-2 pe-2"></i>Add Booking</NavLink>
          </div>
         

       </div>
       </div>
       <div>
         <p className=' text-secondary fs-14 fw-500 ps-4'> <i className="fa-solid fa-circle-info pe-2"></i>Help ?</p>
        
       </div>
     </div>
   </>
  )
}
