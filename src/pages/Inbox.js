import React from 'react'
import Navbottom from '../components/Navbottom.js'
import { NavLink } from 'react-router-dom'

const Inbox = () => {
    return (
        <div>
            <nav>
                <div className="container mt-2">
                    <div className="navbar-header">
                        <div className="text-center">
                            <h1>Inbox</h1>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="pilihan">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-6">
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active-2' : 'non-active')}
                                to='/inbox/notifikasi'
                                style={{ textDecoration: "none" }}>
                                Notifikasi
                            </NavLink>
                        </div>
                        <div className="col-6">
                            <NavLink
                                className={({ isActive }) => (isActive ? 'active-2' : 'non-active')}
                                to='/inbox/informasi'
                                style={{ textDecoration: "none" }}
                            >
                                Informasi
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>

            <Navbottom />
        </div>
    )
}

export default Inbox