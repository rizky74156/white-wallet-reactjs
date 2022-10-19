import React from 'react'
import voucerIcon from '../asset/voucher-icon.svg'
import Vouchercard from '../components/Vouchercard'
import Navbottom from '../components/Navbottom'
const Voucher = () => {
    return (
        <div>
            <nav>
                <div class="container mt-2">
                    <div class="navbar-header">
                        <div class="text-center">
                            <h1>Voucher</h1>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="d-flex gap-2 align-items-center mb-2">
                    <img src={voucerIcon} alt="" />
                    <span className="text-title">Voucher Saya</span>
                </div>

                <div className="row">
                    <div className="col-12">
                        <Vouchercard />
                    </div>
                    <div className="col-12">
                        <Vouchercard />
                    </div>
                    <div className="col-12">
                        <Vouchercard />
                    </div>
                    <div className="col-12">
                        <Vouchercard />
                    </div>
                </div>
            </div>
            <Navbottom />
        </div>
    )
}

export default Voucher