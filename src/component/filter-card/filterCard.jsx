import React from 'react'
import { Button } from '../button/button'
import './filterCard.css'


export default function FilterCard() {
    return (
        <div className='card'>
            <h2 className='header-4 mb-5'>Filter</h2>

            <div className='mb-5'>
                <h6 className='subHeading fw-bold mb-4'>Room Type</h6>

                <div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckDefault">
                            Single
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckChecked">
                           Double
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckChecked">
                           Queen
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckChecked">
                           King
                        </label>
                    </div>
                </div>
            </div>

         

            <div className='mb-5'>
                <h6 className='subHeading fw-bold mb-4'>Payment Status</h6>

                <div>
                    <div className="form-check mb-2">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckDefault">
                            Paid
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label subHeading" htmlFor="flexCheckChecked">
                            Unpaid
                        </label>
                    </div>
                </div>
            </div>

          

            <Button label='Reset All Filters' class="btn btn-primary btn-block"/>
        </div>
    )
}