import React from 'react'

const Textarea = () => {
    return (
        <div>
            <div className="input-group">
                <textarea className="form-control" aria-label="With textarea" placeholder="pesan (opsional)" id="pesan" defaultValue={""} />
            </div>

        </div>
    )
}

export default Textarea