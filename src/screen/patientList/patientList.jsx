import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { filesApi, patientDetailApi } from '../../service/apiService'
import "./paymentList.css"
import patientImg from '../../assets/patient.jpg'

export default function PatientList() {
    const [patientDetail, setPatientDetail] = useState('');
    const [fileData, setfileData] = useState([])
    useEffect(() => {
        getPatientDetail();

        getFiles();

    }, [])

    function getPatientDetail() {
        patientDetailApi().then((result) => {
            console.log(result.data[0]);
            setPatientDetail(result.data[0])
        });
    }

    

    function getFiles() {
        filesApi().then((result) => {
            console.log(result.data[0]['files']);
            setfileData(result.data[0]['files'])
        });
    }

    

    return (
        <>
            <div className='patientList-wrapper'>
                <div className='patient-nav'>
                    <div className='d-flex justify-content-between align-items-center h-100'>
                        <div>
                            <p className='m-0 fs-22 fw-500 ps-4'><i className="fa-regular fa-user px-2 fs-24 profile-icon"></i>{patientDetail.name}</p>
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
                <div className='sub-nav'>
                    <div className='d-flex justify-content-between mx-4 align-items-center h-100'>
                        <div>
                            <p className='m-0 text-primary fw-500 ps-2'>Patient List <span><i className="fa-solid fa-chevron-right mx-3 fs-20 text-secondary"></i></span> <span className='text-secondary'>{patientDetail.name}</span></p>
                        </div>
                        <div className='d-flex'>
                            <div className='editPatient-btn me-2'>
                                <p className='text-secondary fs-14 fw-500 m-0'><i className="fa-solid fa-print"></i></p>
                            </div>
                            <div className='editPatient-btn'>
                                <p className='text-secondary fs-14 fw-500 m-0'><i className="fa-solid fa-pen-to-square"></i> Edit patient</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mx-4 my-3'>
                    <div className='row gx-2'>
                        <div className='col-md-8'>
                            <div className='detail-left-wrapper'>
                                <div className='row gx-1 mb-3'>
                                    <div className='col-md-4'>
                                        <div className='patient-profile-wrapper'>
                                            <div className='profile-img-wrapper'>
                                                <img src={patientImg} alt="" className='patient-img' />
                                            </div>
                                            <p className='fs-20 fw-500 m-0'>{patientDetail.name}</p>
                                            <p className='fs-12 text-secondary'>danicooper@exampe.com</p>
                                            <div className='d-flex'>
                                                <div className='text-center px-4'>
                                                    <p className='m-0 fs-14 fw-700'>{patientDetail.Past}</p>
                                                    <p className='m-0 fs-10 lh-5 text-secondary fw-500'>Past</p>
                                                </div>
                                                <div className='line'></div>
                                                <div className='text-center px-3'>
                                                    <p className='m-0 fs-14 fw-700'>{patientDetail.Upcoming}</p>
                                                    <p className='m-0 fs-10 lh-5 text-secondary fw-500'>Upcoming</p>
                                                </div>
                                            </div>
                                            <button className='btn btn-outline-secondary send-msg-btn'>Send Message</button>
                                        </div>

                                    </div>
                                    <div className='col-md-8'>
                                        <div className='patient-detail-wrapper'>
                                            <div className='d-flex justify-content-between'>
                                                <div className='detail-box'>
                                                    <p className='m-0 text-secondary fs-14 fw-500'>Gender</p>
                                                    <p className='fs-14 m-0 mb-2'>{patientDetail.Gender}</p>
                                                </div>
                                                <div className='detail-box'>
                                                    <p className='m-0 text-secondary fs-14 fw-500'>Birthday</p>
                                                    <p className='fs-14 m-0 mb-2'>{patientDetail.Birthday}</p>
                                                </div>
                                                <div className='detail-box'>
                                                    <p className='m-0 text-secondary fs-14 fw-500'>Phone Number</p>
                                                    <p className='fs-14 m-0 mb-2'>8789460251</p>
                                                </div>


                                            </div>
                                            <div className='d-flex justify-content-between'>
                                                <div className='detail-box'>
                                                    <p className='m-0 text-secondary fs-14 fw-500'>Street Address</p>
                                                    <p className='fs-14  m-0 mb-2'>JI.Diponegoro</p>
                                                </div>
                                                <div className='detail-box'>
                                                    <p className='m-0 text-secondary fs-14 fw-500'>City</p>
                                                    <p className='fs-14  m-0 mb-2'>Feb 24th,2001</p>
                                                </div>
                                                <div className='detail-box'>
                                                    <p className='m-0 text-secondary fs-14 fw-500'>ZIP Code</p>
                                                    <p className='fs-14  m-0 mb-2'>655849</p>
                                                </div>
                                            </div>
                                            <div className='d-flex '>
                                                <div className='detail-box me-4'>
                                                    <p className='m-0 text-secondary fs-14 fw-500'>Member Status</p>
                                                    <p className='fs-14  m-0 mb-2'>Active Member</p>
                                                </div>
                                                <div className='detail-box'>
                                                    <p className='m-0 text-secondary fs-14 fw-500'>Registerd Date</p>
                                                    <p className='fs-14  m-0 mb-2'>Feb 24th,1997</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='appointments-wrapper'>
                                    <div className='appointments-nav'>
                                        <div>
                                            <NavLink to="patientList/upcomingAppoinments" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>Upcoming Appoinments</NavLink>
                                        </div>
                                        <div>
                                            <NavLink to="patientList/pastAppoinments" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')}>Past Appoinments</NavLink>
                                        </div>
                                        <div>
                                            <NavLink to="patientList/medicalRecord" className={({ isActive }) => (isActive ? 'is-active' : 'inactive')} >Medical Records</NavLink>
                                        </div>
                                    </div>
                                    <div className='appointments-detail-wrapper'>
                                        <Outlet />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='detail-right-wrapper'>
                                <div className='notes-wrapper'>
                                    <div className='d-flex justify-content-between px-4 '>
                                        <div>
                                            <p className=' fs-14 fw-500'>Notes</p>
                                        </div>
                                        <div>
                                            <p className='fs-13 fw-500 text-primary'>See all</p>
                                        </div>
                                    </div>
                                    <div className='note-detail'>
                                        <p className='mb-1 fs-12 m-0'>- Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                        <p className='mb-1 fs-12 m-0'>- Lorem ipsum dolor sit amet.</p>
                                        <p className='mb-1 fs-12 m-0'>- Lorem ipsum dolor sit amet consectetur.</p>
                                        <button className='btn btn-primary  save-btn'>Save note</button>
                                    </div>
                                    <div className='px-4 py-2'>
                                        <p className='m-0 fs-14 mb-1'>Lorem ipsum dolor sit amet.</p>
                                        <div className='d-flex justify-content-between'>
                                            <div>
                                                <p className='fs-13 text-secondary m-0'><i className="fa-regular fa-user pe-1 text-primary"></i>Drg.Mega Nanade</p>
                                            </div>
                                            <div>
                                                <p className='fs-13 text-secondary m-0'>20 Nov '19</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='files-wrapper'>
                                    <div className='d-flex justify-content-between'>
                                        <div>
                                            <p className='fs-14 fw-500'>File/Document</p>
                                        </div>
                                        <div>
                                            <p className='fs-14 fw-500 text-primary'>Add Files</p>
                                        </div>
                                    </div>
                                    {
                                        fileData.map((data, index)=>{
                                            return(
                                                <div className='doc-pdf-wrapper'  key={index}>
                                                <div>
                                                    <p className='m-0 text-secondary fs-12'><i className="fa-regular fa-file-lines pe-2 fs-16"></i>{data}</p>
                                                </div>
                                                <div>
                                                    <p className='m-0 text-secondary fs-12'>132kb</p>
                                                </div>
                                            </div>
                                            );
                                        })

                                    }
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}
