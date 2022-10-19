import React from 'react'
import '../css/style.css'

const Vouchercard = ({title, text}) => {
    return (
        <div className="card my-1">
            <div className="card-body">
                <h5 className="card-title">Voucher Potongan Rp5.000</h5>
                <p className="card-text">Berlaku untuk Jenis transaksi apapun</p>
            </div>
        </div>
    )
}

export default Vouchercard