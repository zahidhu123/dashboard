import React from 'react'
import { Button } from '../button/button'
import './filterCard.css'


export default function FilterCard() {
    return (
        <div className='card'>
            <h2 className='header-4 mb-5'>Filter</h2>

            <div className='mb-5'>
                <h6 className='subHeading fw-bold mb-4'>Member Type</h6>

                <div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckDefault">
                            Active Member
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckChecked">
                            Removed Member
                        </label>
                    </div>
                </div>
            </div>

            <div className='mb-5'>
                <h6 className='subHeading fw-bold mb-4'>Batch</h6>

                <div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckDefault">
                            Morning
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckChecked">
                            Evening
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckChecked">
                            Noon
                        </label>
                    </div>
                </div>
            </div>

            <div className='mb-5'>
                <h6 className='subHeading fw-bold mb-4'>Plan</h6>

                <div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckDefault">
                            Strength
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckChecked">
                            Cardio
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckChecked">
                            Strength+Cardio
                        </label>
                    </div>
                </div>
            </div>

            <div className='mb-5'>
                <h6 className='subHeading fw-bold mb-4'>Plan Expired Type</h6>

                <div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckDefault">
                            Expired Plan
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckChecked">
                            About to expire in a week
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckChecked">
                            About to expire in 10 days
                        </label>
                    </div>
                </div>
            </div>

            <Button label='Reset All Filters' class="btn btn-primary btn-block"/>
        </div>
    )
}