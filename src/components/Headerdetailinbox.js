import React from 'react'
import { Link } from 'react-router-dom'
import Xicon from '../asset/x.svg'
import Info from '../asset/info.svg'
import underline from '../asset/underline-3.png'

const Headerdetailinbox = ({page}) => {
    return (
        <div>
            <nav>
                <div className="container mt-3">
                    <div className="navbar-TopUp">
                        <Link to={page}>
                            <img src={Xicon} alt="" />
                        </Link>
                        <div className="text-center">
                            <img src={Info} alt="" />
                            <img src={underline} width="100%" alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Headerdetailinbox