import React from 'react'
import { NumericFormat } from 'react-number-format';

const Inputnominal = ({click,placeholder}) => {
    return (
        <div>
            <div className="input-group mb-3">
                <span className="input-group-text">Rp</span>
                <NumericFormat
                    style={{ letterSpacing: "1px" }}
                    type="text"
                    className="form-control"
                    id="nominal"
                    placeholder={placeholder}
                    allowLeadingZeros
                    thousandSeparator=","
                    onChange={click}
                />
            </div>
        </div>
    )
}

export default Inputnominal
