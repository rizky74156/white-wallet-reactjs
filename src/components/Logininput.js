import React from 'react'

const Logininput = ({ label, placeholder, id, type,name,change , values}) => {
    return (
        <div>
            <div className="input">
                <p>{label}</p>
                <input
                    type={type}
                    className="input-login"
                    id={id}
                    placeholder={placeholder}
                    name={name}
                    onChange={change}
                    value={values}
                />
            </div>

        </div>
    )
}

export default Logininput
