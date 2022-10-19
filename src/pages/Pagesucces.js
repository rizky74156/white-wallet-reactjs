import React from 'react'
import Succes from '../components/Succes'
import Buttonbottom from '../components/Buttonbottom'


const Pagesucces = () => {

    return (
        <div>
            <Succes
                paragraph="Top Up saldo anda berhasil ditambahkan"
            />
            <Buttonbottom
                page="/home"
                span="Kembali"
                kelas="btn btn-primary w-100"
            />
        </div>
    )
}

export default Pagesucces
