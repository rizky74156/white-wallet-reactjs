import React from 'react'
import Buttonminimal from '../components/Buttonnominal'
import Header from '../components/Header'
import Inputnominal from '../components/Inputnominal'
import Buttonbottomdisable from '../components/Buttonbottomdisable'
import BCA from '../asset/bca-logo.svg'

function nominal1() {
    document.getElementById("nominal").value = "100000";
}

function nominal2() {
    document.getElementById("nominal").value = "200000";
}

function nominal3() {
    document.getElementById("nominal").value = "500000";
}

function nominal() {
    var nominal = document.getElementById('nominal')
    var button = document.getElementById('button')


    nominal.addEventListener('input', () => {
        if (nominal.value.length >= 5) {
            button.classList.remove('disabled');
        } else {
            button.classList.add('disabled', 'disabled');
        }
    });



}
const Topup = () => {
    return (
        <div>
            <Header
                judul={"TopUp"}
                page="/home"
            />

            <div className="container batas">
                <div className="saldo-anda text-center">
                    <p>Saldo Anda</p>
                    <h2>Rp500.000</h2>
                </div>
                <div className='nominal'>
                    <div className="pilih-nominal">
                        <h1>Pilih Nominal TopUp</h1>
                        <div className="d-flex d-flex justify-content-center">
                            <div>
                                <Buttonminimal
                                    nominal="100.000"
                                    value="100,000"
                                    click={nominal1}
                                />
                            </div>
                            <div>
                                <Buttonminimal
                                    nominal="200.000"
                                    value="200,000"
                                    click={nominal2}
                                />
                            </div>
                            <div>
                                <Buttonminimal
                                    nominal="500.000"
                                    value="500,000"
                                    click={nominal3}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nominal-lainnya">
                    <h2>Nominal Lainnya</h2>
                    <Inputnominal
                        click={nominal}
                        placeholder="Minimal Rp10.000"
                    />
                </div>
                <div className="kartu-debit">
                    <h1>
                        Kartu Debit
                    </h1>
                    <div className="bank">
                        <img src={BCA} alt="" />
                        <div className="rekening d-flex mx">
                            <p>
                                Nomor Kartu
                            </p>
                            <span>1234 - 5678 - 9876 - XXXX</span>
                        </div>
                    </div>
                </div>
            </div>
            <Buttonbottomdisable
                span={"Top Up Sekarang"}
                page='/topup/succes'
            />
        </div>


    )
}
export default Topup