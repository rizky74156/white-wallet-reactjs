import React from 'react'
import Logo from '../asset/logo SPE.svg'

const Saldowithdraw = ({saldo}) => {
    return (
        <div>
            <div className="d-flex align-items-start">
                <img src={Logo} alt="" />
                <div className="ps-2 saldo">
                    <span className="d-block">SPE Wallet</span>
                    <p>Saldo <span className="fw-bold">Rp{saldo}</span></p>
                </div>
            </div>
        </div>
    )
}

export default Saldowithdraw