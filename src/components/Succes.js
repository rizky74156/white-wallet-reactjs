import React from 'react'
import animation from '../asset/animation.gif'

const Succes = ({paragraph}) => {
    return (
        <div>
            <div className="container mt-5">
                <div className="saldo-anda text-center">
                    <h1>Selamat!</h1>
                    <p>{paragraph}</p>
                    <img src={animation} alt="gif" />
                </div>
            </div>
        </div>
    )
}

export default Succes
