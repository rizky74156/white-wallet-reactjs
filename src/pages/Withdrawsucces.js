import React from 'react'
import Succes from '../components/Succes.js'
import Buttonbottom from '../components/Buttonbottom.js'

const Withdrawsucces = () => {
    return (
        <div>
            <Succes
                paragraph="Withdraw anda telah terkirim"
            />
            <Buttonbottom
                page="/home"
                span="Kembali"
                kelas="btn btn-primary w-100"
            />
        </div>
    )
}

export default Withdrawsucces