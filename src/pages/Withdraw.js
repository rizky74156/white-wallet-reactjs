import React from 'react'
import iconBack from '../asset/Icon-back.png'
import underline from '../asset/underline-3.png'
import Input from '../components/Input'
import Dropdown from '../components/Dropdown'
import Inputnominal from '../components/Inputnominal'
import Saldowithdraw from '../components/Saldowithdraw'
import Textarea from '../components/Textarea'
import Buttonbottomdisable from '../components/Buttonbottomdisable'
import { Link } from 'react-router-dom'

function button(){
    var formControl = document.getElementById("formControl")
    var nominal = document.getElementById("nominal")
    var Username = document.getElementById("Username")
    var norekening = document.getElementById("No Rekening")
    var button = document.getElementById("button")

    formControl.addEventListener('input', () => {
        if (nominal.value.length > 0 &&
            Username.value.length > 0 && norekening.value.length > 0) {
            button.classList.remove('disabled');
        } else {
            button.classList.add('disabled', 'disabled');
        }
    });
}

const Withdraw = () => {


    return (
        <div>
            <nav>
                <div className="container mt-2">
                    <div className="navbar-Withdraw">
                        <div className="back">
                            <Link to="/home">
                                <img src={iconBack} alt="" />
                            </Link>
                        </div>
                        <div className="text-center">
                            <h1>Withdraw</h1>
                        </div>
                    </div>
                </div>
                <img src={underline} width="100%" alt="" />
            </nav>

            <div className="container batas">
                <form id='formControl' onChange={button}>
                    <div className="withdraw">
                        <h1>Pilih Tujuan</h1>
                        <Dropdown />
                        <div>
                            <Input id={"Username"} />
                            <Input id={"No Rekening"} />
                        </div>
                        <img src={underline} width="100%" alt="" />
                    </div>

                    <div className="nominal-withdraw">
                        <Saldowithdraw
                            saldo={"500.000"}
                        />
                        <h1>Masukan Nominal</h1>
                        <Inputnominal
                            placeholder={"0"}
                        />
                        <Textarea />
                    </div>
                </form>
            </div>
            <Buttonbottomdisable
                page={"/withdraw/keamanan"}
                span={"Lanjutkan"}
            />
        </div>
    )
}

export default Withdraw