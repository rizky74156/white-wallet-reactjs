import React from 'react'
import underline from '../asset/underline-3.png'
import succes from '../asset/succes.png'
const Riwayatdetailheader = ({header,text,sub}) => {
    return (
        <div className="jenis">
            <div className="row align-items-start py-1">
                <div className="col-6">
                    <h1>{header}</h1>
                    <p>{text}</p>
                </div>
                <div className="col-6 text-end kondisi">
                    <h1>
                        Berhasil
                        <img src={succes} alt="" />
                    </h1>
                    <p>
                        {sub}
                    </p>
                </div>
                <img src={underline} width="100%" alt="" />
            </div>
        </div>
    )
}

export default Riwayatdetailheader