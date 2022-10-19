import React from 'react'
import iconBack from '../asset/Icon-back.png'
import underline from '../asset/underline-3.png'
import Cardriwayat from '../components/Cardriwayat'
import { Link } from 'react-router-dom'

const Riwayat = () => {
    return (
        <div>
            <nav>
                <div className="container mt-2">
                    <div className="navbar-Riwayat">
                        <div className="back">
                            <Link to="/home">
                                <img src={iconBack} alt="" />
                            </Link>
                        </div>
                        <div className="text-center">
                            <h1>Riwayat Transaksi</h1>
                        </div>
                    </div>
                    <img src={underline} width="100%" alt="" />
                </div>
            </nav>

            <div className="container">
                <Link to="/riwayat/topup" style={{ textDecoration: 'none' }}>
                    <Cardriwayat judul={"Bank Bca"} tanggal={"24 Januari 2022, 10:30:20 WIB"} jenis={"TopUp"} nominal={"+Rp100.000"} />
                </Link>

                <Link to="/riwayat/bayar" style={{ textDecoration: 'none' }}>
                    <Cardriwayat judul={"Tokopedia"} tanggal={"24 Januari 2022, 10:30:20 WIB"} jenis={"Pembayaran"} nominal={"-Rp151.000"} />
                </Link>

            </div>
        </div>
    )
}

export default Riwayat
