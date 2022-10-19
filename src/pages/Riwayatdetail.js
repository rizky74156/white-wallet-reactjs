import React from 'react'
import Riwayatdeskripsi from '../components/Riwayatdeskripsi'
import Riwayattotal from '../components/Riwayattotal'
import Nomorreferensi from '../components/Nomorreferensi'
import Riwayatdetailheader from '../components/Riwayatdetailheader'
import Bantuan from '../components/Bantuan'
import Header from '../components/Header'
import underline from '../asset/underline-3.png'


const Riwayatdetail = () => {
    return (
        <div>
            <Header
                judul={"Riwayat Detail"}
                page="/riwayat"
            />

            <div className="container">
                <div className="riwayat-detail">
                    <Riwayatdetailheader
                        header={"TopUp"}
                        text={"Bank Bca"}
                    />

                    <div className="detail-transaksi">
                        <h1>Detail Transaksi</h1>
                        <Riwayatdeskripsi
                            deskripsi={"Nominal"}
                            jumlah="Rp100.000"
                        />
                        <Riwayatdeskripsi
                            deskripsi={"Biaya Admin"}
                            jumlah="Rp0"
                        />
                        <Riwayattotal
                            total={"100.000"}
                        />
                        <img src={underline} width="100%" alt="" />
                        <Nomorreferensi
                            Nomorreferensi={"7H9123LU37"}
                        />
                    </div>
                    <Bantuan />
                </div>
            </div>
        </div>
    )
}

export default Riwayatdetail
