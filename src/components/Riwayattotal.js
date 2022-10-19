import React from 'react'

const Riwayattotal = ({total}) => {
    return (
        <div>
            <div class="row total-transaksi">
                <div class="col-6">
                    <p>Total</p>
                </div>
                <div class="col-6 text-end">
                    <p>Rp{total}</p>
                </div>
            </div>
        </div>
    )
}

export default Riwayattotal