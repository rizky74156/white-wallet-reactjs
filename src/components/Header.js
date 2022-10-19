import React from 'react'
import iconBack from '../asset/Icon-back.png'
import underline from '../asset/underline-3.png'
import { Link } from 'react-router-dom'

const Header = ({judul,page}) => {
    return (
        <div>
            <nav>
                <div className="container mt-2">
                    <div className="navbar-Riwayat">
                        <div className="back">
                            <Link to={page}>
                                <img src={iconBack} alt="" />
                            </Link>
                        </div>
                        <div className="text-center">
                            <h1>{judul}</h1>
                        </div>
                    </div>
                </div>
                <img src={underline} width="100%" alt="" />
            </nav>
        </div>
    )
}

export default Header