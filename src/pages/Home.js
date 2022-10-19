import React from 'react'
import topup from '../asset/top-up.svg'
import withdraw from '../asset/request.svg'
import riwayat from '../asset/riwayat.svg'
import logo from '../asset/logo SPE.svg'
import '../css/style.css'
import Navbottom from '../components/Navbottom'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='background'>
            <section id="header">
                <div className="container">
                    <div className="d-flex justify-content-between point-balance">
                        <div className="balance">
                            <h1>Rp500.000</h1>
                            <div className="point">
                                <p className="d-inline">SPE Points</p>
                                <span>1.520</span>
                            </div>
                        </div>
                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                    </div>

                    <div className="menu-header mt-2">
                        <div className="row text-center">

                            <div className="col-4">
                                <div className="TopUp-home">
                                    <Link to='/topup'>
                                        <img src={topup} alt="" />
                                        <p>TopUp</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="Withdraw">
                                    <Link to="/withdraw">
                                        <img src={withdraw} alt="" />
                                        <p>Withdraw</p>
                                    </Link>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="Riwayat">
                                    <Link to='/riwayat'>
                                        <img src={riwayat} alt="" />
                                        <p>Riwayat</p>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Navbottom />
        </div>
    )
}

export default Home
