import React from 'react'
import Icon from '../asset/informasi.svg'

const Inboxempty = ({judul}) => {
    return (
        <div>
            <div className="container">
                <div className="text-center mt-4">
                    <img src={Icon} alt="" />
                    <div className="text-empty mt-3">
                        <h1>Belum Ada {judul}</h1>
                        <span>kami pasti kasih tahu anda jika ada {judul} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Inboxempty