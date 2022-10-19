import React from 'react'
import { Link } from 'react-router-dom'

export const NavbarInbox = () => {
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
                            <Link to='/inbox/notifikasi'>
                                Notifikasi
                            </Link>
                        </div>
                        <div className="col-6">
                            <Link to='/inbox/informasi'>
                                Informasi
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavbarInbox
