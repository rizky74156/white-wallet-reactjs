import React from 'react'

const Logininput = ({ label, placeholder, id, type }) => {
    return (
        <div>
            <div className="input">
                <p>{label}</p>
                <input
                    type={type}
                    className="input-login"
                    id={id}
                    placeholder={placeholder}
                />
            </div>

        </div>
    )
}

export default Logininput
