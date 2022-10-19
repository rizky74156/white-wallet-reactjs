import React from 'react'

const Riwayatdeskripsi = ({deskripsi, jumlah}) => {
    return (
        <div>
            <div className="row detail-transaksi">
                <div className="col-6">
                    <p>{deskripsi}</p>
                </div>
                <div className="col-6 text-end">
                    <p>{jumlah}</p>
                </div>
            </div>
        </div>
    )
}

export default Riwayatdeskripsi
