import React from 'react'


const Cardriwayat = ({ judul, tanggal, jenis, nominal }) => {
    return (
        <div className="card-riwayat pt-2 px-2 my-2">
            <div className="row align-items-center">
                <div className="col-6">
                    <div className="header">
                        <h1>{judul}</h1>
                    </div>
                    <div className="tanggal">
                        <p>{tanggal}</p>
                    </div>
                    <div className="jenis">
                        <p>{jenis}</p>
                    </div>
                </div>
                <div className="col-6 px-auto text-end">
                    <div className={jenis}>
                    <p>{nominal}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cardriwayat
