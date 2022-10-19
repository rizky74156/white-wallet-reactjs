import React from 'react'
import underline from '../asset/underline-3.png'
import arrowRight from '../asset/right.svg'

const Profilecard = ({ judul, subjudul }) => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h1>{judul}</h1>
                <div>
                    <span>{subjudul}</span>
                    <img src={arrowRight} alt="" />
                </div>
            </div>
            <div>
                <img src={underline} width="100%" alt="" />
            </div>
        </div>
    )
}

export default Profilecard