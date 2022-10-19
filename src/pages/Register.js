import React from 'react'
import Back from '../asset/arrowback.svg'
import { Link } from 'react-router-dom'
import iconregister from '../asset/register.svg'
import Logininput from '../components/Logininput'
import Buttonregister from '../components/Buttonregister'

const Register = () => {
    return (
        <div>
            <div className='container mt-3 ps-2'>
                <Link to="/">
                    <img src={Back} alt="" />
                </Link>

                <div className='py-2'>
                    <img src={iconregister} width={"100%"} alt="" />
                </div>

                <div className='header-register pt-3'>
                    <h1>Register</h1>
                </div>

                <div className='register'>
                    <div className='py-2'>
                        <Logininput
                            label={"Email"}
                            type="email"
                            id={"email"}
                            placeholder="masukan email"
                        />
                    </div>
                    <div className='py-2'>
                        <Logininput
                            label={"Fullname"}
                            type="text"
                            id={"name"}
                            placeholder="masukan nama"
                        />
                    </div>
                    <div className='py-2'>
                        <Logininput
                            label={"Phone Number"}
                            type="email"
                            id={"phonenumber"}
                            placeholder="masukan no telefon"
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

                    <div className='py-2'>
                        <Buttonregister />
                    </div>
                </div>

            </div>



        </div>
    )
}

export default Register
