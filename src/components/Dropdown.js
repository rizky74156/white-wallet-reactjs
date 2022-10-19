import React from 'react'

const Dropdown = () => {
    return (
        <div>
            <div className="dropdown mt-2">
                <select className="form-select" id="pilihan" aria-label="Default select example">
                    <option selected>Bank</option>
                    <option value="BNI">BNI</option>
                    <option value="Mandiri">Mandiri</option>
                </select>
            </div>
        </div>
    )
}

export default Dropdown