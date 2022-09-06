import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNav from '../../component/sideNav/sideNav'
import "./home.css"

export default function Home() {
  return (
   <>
     <div className='row gx-0'>
         <div className='col-md-2'>
             <SideNav/>
         </div>
         <div className='col-md-10'>
           <Outlet/>
             
         </div>

     </div>
   
   </>
  )
}
