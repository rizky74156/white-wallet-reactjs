import React from 'react'
import home from '../asset/home.svg'
import tiket from '../asset/tiket.svg'
import scan from '../asset/scan.svg'
import inbox from '../asset/mail.svg'
import profile from '../asset/user.svg'
import { NavLink } from 'react-router-dom'
import '../css/style.css'

export const Navbottom = () => {
    return (
        <nav className="navbar navbar-white bg-white navbar-expand fixed-bottom border border-2 border-start-0 border-end-0 border-bottom-0">
            <ul className="navbar-nav nav-justified w-100">
                <li className="nav-item">
                    <NavLink to='/home' className="nav-link">
                        <img src={home} alt="" />
                        <p>Home</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/voucher' className="nav-link">
                        <img src={tiket} alt="" />
                        <p>Voucher</p>
                    </NavLink>
                </li>
                <li className="nav-item position-relative">
                    <NavLink to='/bayar' className="nav-link">
                        <img src={scan} className="position-absolute top-0 start-50 translate-middle" alt="" />
                        <div className="mt-4">
                            <p>Bayar</p>
                        </div>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/inbox' className="nav-link">
                        <img src={inbox} alt="" />
                        <p>Inbox</p>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/profile' className="nav-link">
                    <img src={profile} alt="" />
                        <p>Profile</p>
                    </NavLink>
                </li>
            </ul>
        </nav>

    )
}

export default Navbottom