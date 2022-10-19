import React from 'react'
import Inbox from './Inbox'
import Cardinbox from '../components/Cardinbox'
import { Link } from 'react-router-dom'

const Notifikasi = () => {
    return (
        <div>
            <div className='Navbar'>
                <Inbox />
            </div>

            <div className="container">
                <Link style={{textDecoration:"none"}}
                to="info">
                    <Cardinbox
                        tanggal="26 Januari 2022, 09:37"
                        judul="Info"
                        text="Selamat kamu mendapatkan saldo bonus sebesar Rp10.000 dari promo tahun baru 2022.
                    dengan terus melakukan Top up saldo dan melakukan banyak..."
                    />
                </Link>
            </div>
        </div>
    )
}

export default Notifikasi