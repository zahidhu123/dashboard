import React from 'react'
import ActiveMemberGraph from '../../component/active-member-graph/activeMemberGraph'
import PlanDistributionGraph from '../../component/plan-distribution-graph/planDistributionGraph'
import StatisticsCard from '../../component/statistics-card/statisticsCard'
import './overview.css'

export default function Overview() {
  return (
    <>
      <div className='m-box'>
        <div className='patient-nav1'>
          <div className='d-flex justify-content-between align-items-center h-100'>
            <div>
              <p className='m-0 fs-22 fw-500 ps-4'>Overview</p>
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
        <div className='row mt-4'>
          <div className='col-md-12'>
          <StatisticsCard/>
          </div>
        </div>
        <div className='row pt-4'>
          <div className='col-md-7 mb-4 mb-md-0'>
            <ActiveMemberGraph/>
          </div>
          <div className='col-md-5'>
            <PlanDistributionGraph/>
          </div>
        </div>
      </div>

    </>
  )
}
