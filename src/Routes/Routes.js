import React from 'react'
import Home from '../pages/Home';
import Voucher from '../pages/Voucher';
import Bayar from '../pages/Bayar';
import Inbox from '../pages/Inbox';
import {Profile, Profile2} from '../pages/Profile';
import Topup from '../pages/Topup';
import Informasi from '../pages/Informasi';
import Riwayat from '../pages/Riwayat';
import Pagesucces from '../pages/Pagesucces';
import Withdrawsucces from '../pages/Withdrawsucces';
import Withdraw from '../pages/Withdraw';
import Pin from '../pages/Pin';
import Riwayatdetail from '../pages/Riwayatdetail';
import Detailbayar from '../pages/Detailbayar';
import Notifikasi from '../pages/Notifikasi';
import Detailinbox from '../pages/Detailinbox';
import {Login,Login1} from '../pages/Login';
import Register from '../pages/Register';
import { Routes, Route } from 'react-router-dom'
import '../App.css';


export const AppRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='home' element={<Home />} />
                <Route path='voucher' element={<Voucher />} />
                <Route path='bayar' element={<Bayar />} />
                <Route path='inbox' element={<Inbox />} />
                <Route path='inbox/notifikasi' element={<Notifikasi />} />
                <Route path='inbox/notifikasi/info' element={<Detailinbox />} />
                <Route path='inbox/informasi' element={<Informasi />} />
                <Route path='profile' element={<Profile />} />
                <Route path='topup' element={<Topup />} />
                <Route path='withdraw' element={<Withdraw />} />
                <Route path='riwayat' element={<Riwayat />} />
                <Route path='riwayat/topup' element={<Riwayatdetail />} />
                <Route path='riwayat/bayar' element={<Detailbayar />} />
                <Route path='topup/succes' element={<Pagesucces />} />
                <Route path='withdraw/keamanan' element={<Pin />} />
                <Route path='withdraw/keamanan/succes' element={<Withdrawsucces />} />
            </Routes>
        </div>
    )
}

export const AdminRouter = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login1 />} />
                <Route path='register' element={<Register />} />
                <Route path='home' element={<Home />} />
                <Route path='voucher' element={<Voucher />} />
                <Route path='bayar' element={<Bayar />} />
                <Route path='inbox' element={<Inbox />} />
                <Route path='inbox/notifikasi' element={<Notifikasi />} />
                <Route path='inbox/notifikasi/info' element={<Detailinbox />} />
                <Route path='inbox/informasi' element={<Informasi />} />
                <Route path='profile' element={<Profile2 />} />
                <Route path='topup' element={<Topup />} />
                <Route path='withdraw' element={<Withdraw />} />
                <Route path='riwayat' element={<Riwayat />} />
                <Route path='riwayat/topup' element={<Riwayatdetail />} />
                <Route path='riwayat/bayar' element={<Detailbayar />} />
                <Route path='topup/succes' element={<Pagesucces />} />
                <Route path='withdraw/keamanan' element={<Pin />} />
                <Route path='withdraw/keamanan/succes' element={<Withdrawsucces />} />
            </Routes>
        </div>
    )
}

export default Routes
