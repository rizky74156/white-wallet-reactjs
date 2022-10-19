import React from 'react'

const Input = ({ id }) => {
    return (
        <div>
            <div className="input-group my-2">
                <input
                    type="text"
                    className="form-control"
                    placeholder={id}
                    aria-label={id} aria-describedby="basic-addon1"
                    id={id} />
            </div>

        </div>
    )
}

export default Input