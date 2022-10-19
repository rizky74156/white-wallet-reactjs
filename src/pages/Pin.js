import React from 'react'
import { StatefulPinInput } from 'react-input-pin-code';

import Buttonbottomdisable from '../components/Buttonbottomdisable';

// function button() {
//     var button = document.getElementById('button')
//     var pin = document.getElementsByClassName('input')

//     if ( pin.value = "123412"){
//         button.classList.remove('disabled');
//     }else{
//         button.classList.add('disabled');
//     }

// }

const Pin = () => {
    return (
        <div>
            <div className="input text-center mx-auto">
                <StatefulPinInput
                    length={5}
                    mask="true"
                    // onChange={button}
                />
            </div>

            < Buttonbottomdisable
                page={"/withdraw/keamanan/succes"}
                span="Lanjutkan"
            />
        </div>
    )
}

export default Pin