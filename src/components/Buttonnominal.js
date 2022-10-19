import React from 'react'

const Buttonminimal = ({ nominal, click, value }) => {
    return (
        <div>
            <button
                id="buttonClick"
                type="button"
                className="button-nominal mx-1"
                value={value}
                onClick={click}
            >Rp{nominal}</button>
        </div>
    )
}

export default Buttonminimal
