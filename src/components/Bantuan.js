import React from 'react'
import Bantuanlogo from '../asset/bantuan.png'

const Bantuan = () => {
    return (
        <div>
            <div className="bantuan text-center">
                <img src={Bantuanlogo} alt="" />
                <p>
                    Bantuan
                </p>
            </div>
        </div>
    )
}

export default Bantuan