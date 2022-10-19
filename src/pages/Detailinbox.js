import React from 'react'
import Headerdetailinbox from '../components/Headerdetailinbox'
import Cardinbox from '../components/Cardinbox'
import Buttonbottom from '../components/Buttonbottom'

const Detailinbox = () => {
    return (
        <div>
            <Headerdetailinbox
                page={"/inbox/notifikasi"}
            />
            <div className="container">
                <Cardinbox
                    tanggal="26 Januari 2022, 09:37"
                    judul="Info"
                    text="Selamat kamu mendapatkan saldo bonus sebesar Rp10.000 dari promo tahun baru 2022. dengan terus melakukan Top up saldo dan melakukan banyak transaksi, maka anda berkesempatan mendapat beragam bonus. Yuk terus transaksi pakai SPE Wallet"
                />
            </div>
            <Buttonbottom
                page={"/inbox/notifikasi"}
                span="Tutup"
            />
        </div>
    )
}

export default Detailinbox