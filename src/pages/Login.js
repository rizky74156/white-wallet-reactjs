import React from 'react'
import Logininput from '../components/Logininput'
import city from '../asset/city4.svg'
import Buttonlogin from '../components/Buttonlogin'
import { Link } from 'react-router-dom'

export const Login = () => {
    return (
        <div>
            <div className="container">

                <div className='header-login text-center'>
                    <h1>Selamat Datang</h1>
                    <img src={city} width="70%" alt="" />
                </div>

                <div className='login'>
                    <h1>Log in</h1>
                    <div className='py-2'>
                        <Logininput
                            label={"Email Adress"}
                            type="email"
                            id={"email"}
                            placeholder="masukan email"
                        />
                    </div>
                    <div className='py-2'>
                        <Logininput
                            label={"Password"}
                            type="password"
                            id={"password"}
                            placeholder="masukan password"
                        />
                    </div>
                </div>

                <div className='button pt-3'>
                    <div className='py-2'>
                        <Buttonlogin />
                    </div>
                    <div className='py-2'>
                        <Link to="/register">
                            <button className='btn-login-register'>
                                Register
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export const Login1 = () => {
    return (
        <div>
            <div className="container">

                <div className='header-login text-center'>
                    <h1>Selamat</h1>
                    <img src={city} width="70%" alt="" />
                </div>

                <div className='login'>
                    <h1>Log in</h1>
                    <div className='py-2'>
                        <Logininput
                            label={"Email Adress"}
                            type="email"
                            id={"email"}
                            placeholder="masukan email"
                        />
                    </div>
                    <div className='py-2'>
                        <Logininput
                            label={"Password"}
                            type="password"
                            id={"password"}
                            placeholder="masukan password"
                        />
                    </div>
                </div>

                <div className='button pt-3'>
                    <div className='py-2'>
                        <Buttonlogin />
                    </div>
                    <div className='py-2'>
                        <Link to="/register">
                            <button className='btn-login-register'>
                                Register
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Login
