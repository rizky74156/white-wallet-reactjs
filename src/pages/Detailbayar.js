import React from 'react'
import Riwayatdeskripsi from '../components/Riwayatdeskripsi'
import Riwayattotal from '../components/Riwayattotal'
import Nomorreferensi from '../components/Nomorreferensi'
import Riwayatdetailheader from '../components/Riwayatdetailheader'
import Bantuan from '../components/Bantuan'
import Header from '../components/Header'
import underline from '../asset/underline-3.png'


const Detailbayar = () => {
    return (
        <div>
            <Header
                judul={"Riwayat Detail"}
                page="/riwayat"
            />

            <div className="container">
                <div className="riwayat-detail">
                    <Riwayatdetailheader
                        header={"Pembayaran"}
                        text={"Tokopedia"}
                    />

                    <div className="detail-transaksi">
                        <h1>Detail Transaksi</h1>
                        <Riwayatdeskripsi
                            deskripsi={"Nominal"}
                            jumlah="Rp150.000"
                        />
                        <Riwayatdeskripsi
                            deskripsi={"Biaya Admin"}
                            jumlah="Rp1000"
                        />
                        <Riwayattotal
                            total={"151.000"}
                        />
                        <img src={underline} width="100%" alt="" />
                        <Nomorreferensi
                            Nomorreferensi={"8T5036GN21"}
                        />
                    </div>
                    <Bantuan />
                </div>
            </div>
        </div>
    )
}

export default Detailbayar
