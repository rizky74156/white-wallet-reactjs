import React from 'react'

import underline from '../asset/underline-3.png'

const Cardinbox = ({tanggal,judul,text}) => {
    return (
        <div>
            <div className="card-body my-2">
                <h5 className="card-time">{tanggal}</h5>
                <h6 className="card-judul">{judul}</h6>
                <p className="card-text">{text}</p>
                <img src={underline} width="100%" alt="" />
            </div>

        </div>
    )
}

export default Cardinbox